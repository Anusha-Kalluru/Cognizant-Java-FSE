CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER(12,2)
);

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(50),
    Department VARCHAR2(30),
    Salary NUMBER(10,2)
);

INSERT INTO Accounts VALUES (101, 1, 'Savings', 15000);
INSERT INTO Accounts VALUES (102, 2, 'Current', 10000);
INSERT INTO Accounts VALUES (103, 3, 'Savings', 20000);
INSERT INTO Accounts VALUES (104, 4, 'Savings', 15000);
INSERT INTO Accounts VALUES (105, 5, 'Current', 3000);
INSERT INTO Accounts VALUES (106, 6, 'Savings', 22000);
INSERT INTO Accounts VALUES (107, 7, 'Savings', 5000);
INSERT INTO Accounts VALUES (108, 8, 'Current', 12000);
INSERT INTO Accounts VALUES (109, 9, 'Savings', 23900);
INSERT INTO Accounts VALUES (110, 10, 'Savings', 33244);

INSERT INTO Employees VALUES (1, 'Anusha', 'IT', 62000);
INSERT INTO Employees VALUES (2, 'Bhargav', 'HR', 35000);
INSERT INTO Employees VALUES (3, 'Swaroop', 'IT', 24500);
INSERT INTO Employees VALUES (4, 'Teja', 'Finance', 35000);
INSERT INTO Employees VALUES (5, 'Harsha', 'IT', 15000);
INSERT INTO Employees VALUES (6, 'Manoj', 'HR', 12000);
INSERT INTO Employees VALUES (7, 'Bharath', 'Finance', 20000);
INSERT INTO Employees VALUES (8, 'Karthikeya', 'IT', 13000);
INSERT INTO Employees VALUES (9, 'Lohith', 'Marketing', 20000);
INSERT INTO Employees VALUES (10, 'Shyam', 'Marketing', 30000);

COMMIT;

-- Scenario 1: Process Monthly Interest

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Monthly interest applied successfully.');
END;
/
SET SERVEROUTPUT ON;

BEGIN
    ProcessMonthlyInterest;
END;
/

-- Scenario 2: Update Employee Bonus

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_Department VARCHAR2,
    p_BonusPercent NUMBER
)
IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * p_BonusPercent / 100)
    WHERE Department = p_Department;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Bonus updated successfully.');
END;
/

SET SERVEROUTPUT ON;

BEGIN
    UpdateEmployeeBonus('IT',10);
END;
/


-- Scenario 3: Transfer Funds

CREATE OR REPLACE PROCEDURE TransferFunds(
    p_FromAccount NUMBER,
    p_ToAccount NUMBER,
    p_Amount NUMBER
)
IS
    v_Balance NUMBER;
BEGIN

    SELECT Balance
    INTO v_Balance
    FROM Accounts
    WHERE AccountID = p_FromAccount;

    IF v_Balance >= p_Amount THEN

        UPDATE Accounts
        SET Balance = Balance - p_Amount
        WHERE AccountID = p_FromAccount;

        UPDATE Accounts
        SET Balance = Balance + p_Amount
        WHERE AccountID = p_ToAccount;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Transfer Successful.');

    ELSE

        DBMS_OUTPUT.PUT_LINE('Insufficient Balance.');

    END IF;

END;
/

SET SERVEROUTPUT ON;

BEGIN
    TransferFunds(101,102,500);
END;
/

SELECT * FROM Accounts;