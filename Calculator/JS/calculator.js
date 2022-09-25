//Creates an object to keep track of values.
const Calculator = {
    //This will display 0 on the calculator screen.
    Display_Value: '0',
    //This will hold the first operand for any expressions, we set it to null for now.
    First_Operand: null,
    //This checks whether or not the second operand has been inputted by the user
    Wait_Second_Operand: false,
    //This will hold the operator, we set it to null for now.
    operator: null,
};

//This modifies values each time a button is clicked on.