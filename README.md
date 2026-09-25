# WEB103 Project 1 - DreamGarage

Submitted by: **Alston Dsouza**

About this web app: **DreamGarage is a list-based web app where users can explore iconic performance cars and view detailed information about each car.**

Time spent: **11 hours**

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app displays a title**
- [x] **The web app displays at least five unique list items, each with at least three displayed attributes (such as title, text, and image)**
- [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**
  - [x] **Each detail view is a unique endpoint, such as `localhost:3000/cars/1` and `localhost:3000/cars/3`**
  - [x] **The unique URL for each detailed view is shown in the video walkthrough**
- [x] **The web app serves an appropriate 404 page when no matching route is defined**
- [x] **The web app is styled using Picocss**

The following **optional** features are implemented:

- [x] The web app displays items in a unique card layout

The following **additional** features are implemented:

- [x] Added images for each performance car
- [x] Added responsive styling for different screen sizes
- [x] Added a custom homepage and navigation

## Live Site

https://dreamgarage.onrender.com/

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='assets/dreamgarage-walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with Kap

## Notes

One challenge I had was setting up the individual car routes and making sure each car had its own detail page. I also had to make sure the images loaded correctly from the public folder and that invalid routes displayed the custom 404 page.

## License

Copyright 2026 Alston Dsouza

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
---

# WEB103 Project 2 - DreamGarage

Submitted by: **Alston Dsouza**

About this web app: **DreamGarage is a list-based web app where users can explore iconic performance cars. In Project 2, the app was refactored to retrieve its car data from a PostgreSQL database hosted on Render.**

Time spent: **6** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**
  - [x] **The walkthrough includes a view of the Render dashboard demonstrating that the PostgreSQL database is available**
  - [x] **The walkthrough includes a demonstration of the table contents using `SELECT * FROM cars;`**

The following **optional** features are implemented:

- [ ] The user can search for items by a specific attribute

The following **additional** features are implemented:

- [x] Deployed the database-backed application on Render
- [x] Added individual database-backed car detail endpoints
- [x] Added handling for nonexistent car IDs with a 404 response

## Live Site

https://dreamgarage.onrender.com/

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='assets/dreamgarage-project2-walkthrough.gif' title='Project 2 Video Walkthrough' width='' alt='Project 2 Video Walkthrough' />

GIF created with Kap

## Notes

One challenge I encountered was migrating the car data from a local JavaScript array to PostgreSQL while keeping the existing frontend behavior. I created and seeded a PostgreSQL table, connected the Express backend to the Render PostgreSQL database using environment variables, and updated the car routes to retrieve data from the database.

## License

Copyright 2026 Alston Dsouza

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
