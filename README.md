# Technical Accessibility Workshop
## Introduction
This workshop contains 3 exercises, going from basics to more advanced concepts.
We start with index.html and we build towards a full landing page by embedding two.html and three.html along the way. In the index.html are some spots reserved where step two and three should be embedded.

In advance, get the repo https://github.com/timdujardin/technical-accessibility-workshop on your computer and open the index.html file. There is no dev server or build present to keep it as small scale as possible. So, you can just open the index.html file in your editor and browser.

The different zones we are working in are indicated in the repo by “TODO”:.
If there are any further questions you can always ask during the workshop.

## Exercise 1
The first exercise focuses on general semantics of a page, the goal is to optimize for efficient navigation, identification and orientation. The following aspects should be considered to make the general page setup more accessible:

1.	Page title configuration
2.	Headings outline
3.	Implement a skip link to the main content (optional)
Try this exercise if you feel confident enough, we’ll discuss in group later.
 
## Exercise 2
Let’s dive into accessible naming and the different techniques to consider:

1.	Alternative text for images and icons
2.	Links with meaningful purpose

## Exercise 3
Forms are commonly used to provide user interaction on websites and in web applications. For example: login, registering, commenting, and purchasing. This exercise will highlight some of the main considerations to make a form accessible:

1.	Make the "firstname" and "lastname" required fields.
2.	Add a section to the form containing 2 fields : "Vehicle registration number" and "Additional vehicle requests". Provide the section with a title "Vehicle information".
3.	The new section should have a class "app-form__group"
    1. "Vehicle registration number" is a required text field
    2. "Additional vehicle requests" is a required textarea with 3 rows of text
4.	Add input instructions to the 2 new fields, the specific locations are tagged with [instruction-to-add]:
    1. "Vehicle registration number" : Fill in a format of 2 letters followed by 2 numbers, followed by a space and then 3 letters.
    2. "Additional vehicle requests" : Limit your requests to 2000 characters.
5.	Provide inline error messages for the required fields, the specific locations are tagged with [error-message-to-add].
 
## Exercise 4
When content changes after initial load, assistive technology (AT) users may not "see" the changes. Some changes are important. Others are not. Live regions enable developers to inform the user of updates and choose, based on importance and urgency, whether to immediately, proactively, or passively inform AT users of changes to the content.

1.	Add a live region to the page that communicates updates in a non-disruptive way
2.	Make sure the skeleton is identified as loading state, both visually and semantically
3.	Add a message to the live region once the asynchronous content is loaded. The message should contain a list of 3 cars: car 1, 2 and 3.
4.	Add an interactive alert message containing an “ok” and “cancel” button to confirm resetting the current state of the page to the initial state.
![image](https://github.com/user-attachments/assets/ce2da806-8400-4c9e-895b-0c2a75108af9)
