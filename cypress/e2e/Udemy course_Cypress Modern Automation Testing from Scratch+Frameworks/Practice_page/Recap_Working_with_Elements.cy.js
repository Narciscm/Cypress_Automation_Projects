describe("Recap - Working with elements", () => {
	//Test Case 1
	it("Interact with Radio Button", () => {
		//Arange
		
		//Visit the Test page
		cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
		
		//Act
		
		//Select Radio Button 1
		cy.get('[value="radio1"]').click();
		
		
		//Assert
		
		//Check that Radio Button 1 is selected, while the other 2 are not selected
		cy.get('[value="radio1"]').should("be.checked");
		cy.get('[value="radio2"]').should("not.be.checked");
		cy.get('[value="radio3"]').should("not.be.checked");
		
		//Act
		
		//Select Radio Button 2
		cy.get('[value="radio2"]').check();
		
		//Assert
		
		//Check that Radio Button 2 is selected
		cy.get('[value="radio2"]').should("be.checked");
	});

    //Test Case 2
	it("Interact with Checkboxes", () => {
		//Arrange
		
		//Visit the Test page
		cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
		
		//Act
		
		//Select Checkbox Option 1
		cy.get("#checkBoxOption1").check();
		
		//Assert
		
		//Check that Checkbox Option 1 is selected
		cy.get("#checkBoxOption1").should("be.checked");
		
		//Act
		
		//Unselect Checkbox Option 1 and select Checkboxes 2 and 3
		cy.get("#checkBoxOption1").uncheck();
		cy.get("#checkBoxOption2").check();
		cy.get("#checkBoxOption3").check();
		
		//Assert
		
		//Check that Checkbox Option 1 is unselected, while Checkboxes 2 and 3 are selected
		cy.get("#checkBoxOption1").should("not.be.checked");
		cy.get("#checkBoxOption2").should("be.checked");
		cy.get("#checkBoxOption3").should("be.checked");
	});

    //Test Case 3
	it("Interact with Static Dropdown", () => {
		//Arrange
		
		//Visit the Test page
		cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
		
		//Act
		
		cy.get("#dropdown-class-example").select("Option2"); //Select Option 2 from the dropdown
		
		//Assert

        cy.get("#dropdown-class-example").should("have.value", "option2"); //Check that Option 2 is selected
	});

    //Test Case 4
	it("Interact with Dynamic Dropdown", () => {
		//Arrange
		
		//Visit the Test page
		cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
		
		//Act
		
        //Type 'ind' into the dynamic dropdown input field with id 'autocomplete'
		cy.get("#autocomplete").type("ind");

        //Iterate through each element in the list of dropdown options with class 'ui-menu-item div'
        cy.get(".ui-menu-item div").each(($el, index, $list) => {
            //If the text of the current element is 'India', click on it
            if ($el.text() === "India") {
                $el.click();
            }
        });
        
        //Assert

        //Assert that the input field with id 'autocomplete' has the value 'India'
        cy.get("#autocomplete").should("have.value", "India");
		
		
	});

    //Test Case 5
	it("Interact with Visible and Hidden Elements", () => {
		//Arrange
		
		//Visit the Test page
		cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
		
		//Act - Check that the text box is visible, then type some text into it
		
		cy.get("#displayed-text").should("be.visible").type("Demo Text");

		//Act - hide the text box
		cy.get("#hide-textbox").click();
		
		//Assert
		cy.get("#displayed-text").should("not.be.visible");
		
        //Act - make the text box visible again
		cy.get("#show-textbox").click();
		
        //Assert - check that the text box is visible again
		cy.get("#displayed-text").should("be.visible");

        //Assert - check that the text box contains the text that was typed into it before it was hidden
        cy.get("#displayed-text").should("have.value", "Demo Text");
			
	});
});