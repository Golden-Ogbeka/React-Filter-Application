# SOLUTION

## Estimation

Estimated: 24 hours

Timeline:
Monday 8th November 2021: 10:39am - 11:59am, 12:24pm - 1:12pm, 2:33pm - 3:57pm, 4:45pm - 5:14pm, 6pm - 6:45pm

80 + 48 + 84 + 29 + 45 minutes

Spent: 4.8 hours

## Solution

The app contains a sidebar that hold three filter options - Filter by tag, price or subscription

Test Cases:

- As a user if I filter by tag and type Chews, I would receive 6 results
- As a user if I filter by price and type 127, I would receive 4 results
- As a user if I filter by subscription and select yes, I would receive 4 results

Process:

- When filtering by tags, the app servers for tags that contains the entered value and filters the matched records from the list
- When filtering by price, the app return records with prices either equals to or when rounded up, would produce the entered value
- When filtering by subscription, the app matches the records whose subscriptions are either true or false as selected by the yes or no options

App Structure

- The API is running with json-server. Install json-server globally from npm
- To connect to the APIs, run: json-server --watch data/products.json
- I uses axios to make a request to the json file to get all the products
- I used react context to creat an app-level state for the products gotten in App.js
- The sidebar is mobile-friendly

Provisions for a better product

- Availability for users to filter by more than one option. So users can filter by both tags and price or tags and subscription etc
