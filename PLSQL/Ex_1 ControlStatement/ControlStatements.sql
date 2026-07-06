-- Create Customers Table
CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER(12,2),
    IsVIP VARCHAR2(5)
);

-- Create Loans Table
CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER(5,2),
    DueDate DATE,
    CONSTRAINT fk_customer
        FOREIGN KEY (CustomerID)
        REFERENCES Customers(CustomerID)
);


INSERT INTO Customers VALUES (101, 'Anusha', 20, 15000, 'FALSE');
INSERT INTO Customers VALUES (102, 'Bhargav', 22, 9000, 'FALSE');
INSERT INTO Customers VALUES (103, 'Manoj', 40, 28000, 'FALSE');
INSERT INTO Customers VALUES (104, 'Harsha', 30, 22000, 'FALSE');
INSERT INTO Customers VALUES (105, 'Bharath', 32, 9000, 'FALSE');
INSERT INTO Customers VALUES (106, 'Karthikeya', 52, 8000, 'FALSE');
INSERT INTO Customers VALUES (107, 'Teja', 65, 8800, 'FALSE');
INSERT INTO Customers VALUES (108, 'Swaroop', 38, 8900, 'FALSE');
INSERT INTO Customers VALUES (109, 'Lohith', 62, 32000, 'FALSE');
INSERT INTO Customers VALUES (110, 'Eshwar', 30, 12000, 'FALSE');

INSERT INTO Loans VALUES (201, 101, 10.50, DATE '2026-07-11');
INSERT INTO Loans VALUES (202, 102, 11.00, DATE '2026-07-07');
INSERT INTO Loans VALUES (203, 103, 9.50, DATE '2026-07-15');
INSERT INTO Loans VALUES (204, 104, 12.00, DATE '2026-08-20');
INSERT INTO Loans VALUES (205, 105, 10.00, DATE '2026-09-01');
INSERT INTO Loans VALUES (206, 106, 11.50, DATE '2026-07-12');
INSERT INTO Loans VALUES (207, 107, 9.75, DATE '2026-08-05');
INSERT INTO Loans VALUES (208, 108, 10.25, DATE '2026-07-18');
INSERT INTO Loans VALUES (209, 109, 8.50, DATE '2026-07-08');
INSERT INTO Loans VALUES (210, 110, 10.75, DATE '2026-08-25');

COMMIT;

-- Scenario 1: Apply 1% Discount for Customers Above 60 Years

SET SERVEROUTPUT ON;

BEGIN
    FOR c IN (
        SELECT CustomerID, Age
        FROM Customers
    )
    LOOP
        IF c.Age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = c.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'Discount Applied for Customer ID: '
                || c.CustomerID
            );
        END IF;
    END LOOP;

    COMMIT;
END;
/

-- Scenario 2: Promote Customers to VIP

SET SERVEROUTPUT ON;

BEGIN
    FOR c IN (
        SELECT CustomerID, Balance
        FROM Customers
    )
    LOOP
        IF c.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP='TRUE'
            WHERE CustomerID=c.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'Customer '
                || c.CustomerID
                || ' Promoted to VIP'
            );
        END IF;
    END LOOP;

    COMMIT;
END;
/

-- Scenario 3: Loan Due Reminder
SET SERVEROUTPUT ON;

BEGIN
    FOR l IN (
        SELECT c.Name,
               l.LoanID,
               l.DueDate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
        WHERE l.DueDate BETWEEN DATE '2026-07-01'
                            AND DATE '2026-07-31'
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan '
            || l.LoanID
            || ' for '
            || l.Name
            || ' is due on '
            || TO_CHAR(l.DueDate,'DD-MON-YYYY')
        );
    END LOOP;
END;
/