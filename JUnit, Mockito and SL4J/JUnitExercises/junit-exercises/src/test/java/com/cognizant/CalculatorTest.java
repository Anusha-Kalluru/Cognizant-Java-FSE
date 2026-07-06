package com.cognizant;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;

public class CalculatorTest {

    Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup Completed");
    }

    @After
    public void tearDown() {
        System.out.println("Cleanup Completed");
    }

    @Test
    public void testAddition() {
        int result = calculator.add(10,20);
        assertEquals(30,result);
    }

    @Test
    public void testSubtraction() {
        int result = calculator.subtract(30,15);
        assertEquals(15,result);
    }
}