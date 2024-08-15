# MERN Project - Business Company (Frontend)

This repository contains the frontend of a MERN stack application developed using ReactJS. <br />
The project replaces the current sticky note system by providing an interactive web interface with features for managing employees, notes, and access control.

## Features
- **Public Facing Page:** Includes basic contact information accessible without login.
- **Employee Login System:** Allows employees to securely log in and access the application.
- **Welcome Page:** Displays after a successful login.
- **User Roles:** Employees, Managers, and Admins have different levels of access and capabilities.
- **Notes Management:** Notes are assigned to specific employees and can be managed (view, edit, delete) based on roles.
- **Role-Based Access Control:** Different features and settings are accessible depending on the user’s role.
- **Responsive Design:** Focuses on desktop mode but includes basic mobile support.

## Use Cases Addressed
1. Replace current sticky note system.
2. Add a public-facing page with basic contact info.
3. Employee login to the notes app.
4. Welcome page after login.
5. Easy navigation.
6. Display current user and assigned role.
7. Provide a logout option.
8. Require users to log in at least once per week.
9. Remove employee access immediately if needed.
10. Notes are assigned to specific employees.
11. Notes have a ticket #, title, note body, created & updated dates.
12. Notes are either OPEN or COMPLETED.
13. Users can be Employees, Managers, or Admins.
14. Notes can only be deleted by Managers or Admins.
15. Anyone can create a note (when a customer checks in).
16. Employees can only view and edit their assigned notes.
17. Managers and Admins can view, edit, and delete all notes.
18. Only Managers and Admins can access User Settings.
19. Only Managers and Admins can create new users.

## Tech Stack
- **ReactJS**
- **Redux Toolkit** for API calls and state management.
- **React Router** for navigation.
- **CSS** for styling.

## Deployed Application
The frontend of the application is deployed and accessible at:
- [Frontend Live URL](https://businesscompany.onrender.com)
