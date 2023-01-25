# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1: Add custom Agent id field to Agent table

- **Acceptance Criteria**: A new field, "custom_agent_id," should be added to the Agent table in the database. This field should be able to store a string of up to 50 characters.
- **Time/Effort Estimate**: 1 hour
- **Implementation Details**: This can be done by adding a new column to the Agent table in the database, with a VARCHAR(50) data type. The field should be nullable, as Facilities may not always have a custom id for each Agent.

### Ticket 2: Allow Facilities to add/edit custom Agent id

- **Acceptance Criteria**: A new page or modal should be added to the Facility's dashboard where they can add or edit custom Agent ids for Agents they work with. The page or modal should display a list of Agents they work with, and should allow them to enter a custom id for each Agent.
- **Time/Effort Estimate**: 2 hours
- **Implementation Details**: A new page or modal can be added to the Facility's dashboard using the appropriate front-end framework. The page or modal should have a form where Facilities can enter custom ids for Agents. The form should make a PUT request to the server to update the custom_agent_id field in the Agent table for the corresponding Agent.

### Ticket 3: Use custom Agent id in report generation

- **Acceptance Criteria**: The generateReport function should use the custom_agent_id field from the Agent table, if it is not null, instead of the internal database id when generating reports.
- **Time/Effort Estimate**: 1 hour
- **Implementation Details**: The generateReport function should first check if the custom_agent_id field is not null for the Agent in question, and use that id if it is. If it is null, it should fall back to using the internal database id.

### Ticket 4: Add validation for custom Agent id

- **Acceptance Criteria**: The custom_agent_id field should be unique and non-nullable.
- **Time/Effort Estimate**: 1 hour
- **Implementation Details**: You can add a unique constraint on custom_agent_id field on agent table. Also, you can add a validation on front-end and back-end that custom_agent_id field should not be null before saving it to the database.

### Ticket 5: Test and Deploy

- **Acceptance Criteria**: The new feature should be thoroughly tested and deployed to the production environment without any errors.
- **Time/Effort Estimate**: 2 hours
- **Implementation Details**: Test the new feature for various scenarios and ensure it is working as expected. Once the testing is done, it should be deployed to the production environment.
