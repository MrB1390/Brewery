# Brewery
### Description:

This JavaScript code interacts with the Open Brewery DB API to retrieve brewery information and dynamically display it on a webpage. It fetches data for a single brewery, breweries based on a filter, and breweries located in San Diego. The fetched data is then used to generate HTML content and update the webpage.

### Functionality:

1.  **singleBrew Function**: This asynchronous function fetches data from the provided API URL and returns it in JSON format.
    
2.  **DOMContentLoaded Event Listener**: This event listener triggers the execution of code once the DOM content has loaded.
    
3.  **Fetching Single Brewery Data**:
    
    *   The code fetches data for a single brewery using a specific API URL.
    *   Upon successful retrieval, it adds an event listener to a button with the ID `by_single-1`.
    *   When clicked, it generates HTML content for the brewery and updates the corresponding HTML element.
4.  **Fetching Breweries based on Filter**:
    
    *   Another fetch call retrieves data for breweries based on a filter (in this case, the first 3 breweries).
    *   For each brewery fetched, an event listener is added to a button with the ID `by_filter-1`.
    *   When clicked, it generates HTML content for each brewery and appends it to the existing HTML content.
5.  **Fetching Breweries in San Diego**:
    
    *   Similarly, the code fetches data for breweries located in San Diego.
    *   For each brewery fetched, an event listener is added to a button with the ID `by_city-1`.
    *   When clicked, it generates HTML content for each San Diego brewery and appends it to the existing HTML content.
6.  **generateBreweryHTML Function**:
    
    *   This function generates HTML content for brewery data.
    *   It iterates through the key-value pairs of the brewery object and creates list items with the key-value pairs.
    *   Finally, it returns the generated HTML.

### Usage:

*   Ensure an active internet connection to fetch data from the Open Brewery DB API.
*   Incorporate the provided JavaScript code into your HTML document within a `<script>` tag or an external JavaScript file.
*   Add corresponding HTML elements with appropriate IDs for the buttons and areas where brewery information will be displayed.
*   Click on the buttons to trigger the fetching and display of brewery data based on the specified criteria.

### Notes:

*   Make sure to handle errors gracefully in case the API calls fail or return unexpected data.
*   Customize the HTML structure and CSS styles as per your requirements.
*   Additional features such as error handling, pagination, or filtering options can be implemented to enhance functionality.

### Author:

This JavaScript code is authored by \[Your Name\]. For any inquiries or contributions, feel free to reach out.

### License:

This code is provided under \[License Name\]. Refer to the LICENSE file for more details.
