# Google Sheets Server 🚀

Turn Google Sheets into a free lightweight database/server using Google Apps Script. Perfect for small projects, prototypes, and serverless applications (e.g. chrome extensions)!
> As people were interested in how I managed my extension in r/chrome_extensions

## 🔥 Features

- **Free Server Alternative** - Utilize Google Sheets as your backend
- **Rest API** - Create, Read, Update data through simple API calls you can create yourself
- **Chrome Extension Interface** - User-friendly interface for testing
- **Google Apps Script Integration** - Secure, Google-approved API endpoints
- **Lightweight** - No databases or complex infrastructure required

## 🚀 Quick Start

### Installation
1. Clone repo:
   ```bash
   git clone https://github.com/harvey/google-sheets-server.git
   ```

2. Make a new google sheets document (this is where you will store your data)

3. Click `Extensions -> App Script`

![image](https://github.com/user-attachments/assets/4c07885a-fe98-4ae1-b8f8-ef5ef5f54ec9)

4. Paste code from [simple-get.js](https://github.com/harvey/google-sheets-server/blob/main/simple-get.js) into your app script

5. Click `Deploy -> New deployment`

![image](https://github.com/user-attachments/assets/1b3e741e-f279-4ed9-91fa-a8b70ad3e435)

6. Press `Select type -> Web app`

![image](https://github.com/user-attachments/assets/4af5689c-489a-40f0-8d0c-b317d660e2e9)

7. Select `Anyone` under `Who has access`

![image](https://github.com/user-attachments/assets/9a6ff753-8efa-4352-84ee-8e9c41b3b7bc)

8. Press `Deploy`
9. If required press `Authorize access` and login with google (Google hasn't verified this app, because you have just made this app).

![image](https://github.com/user-attachments/assets/95c54ee1-afc9-46df-b918-de834228bb9b)

10. Then press `Allow` on the google popup

11. Copy this url

![image](https://github.com/user-attachments/assets/ea718349-705f-4f55-829f-11076f304304)

12. Install the extension under `./example-extension`

13. Test the extension

![image](https://github.com/user-attachments/assets/08607041-fe8a-48d5-8af9-7f36f98cf34f)

## Updating the script without changing the URL

### To update the google app script without changing its url (to allow for updates / fixes without changing the URL in your extension):

1. Press `Deploy -> Manage deployments`

![image](https://github.com/user-attachments/assets/06d9c60a-5cb9-457f-bad5-7c29c5e67c48)

2. Press `Edit`

![image](https://github.com/user-attachments/assets/5661f370-a77d-448f-bc12-b0b3512368a8)

3. Click the version, then click `New version`

![image](https://github.com/user-attachments/assets/72247b81-86cb-4b70-b1bc-5b22ea0fd9eb)

4. Then click `Deploy`

> This should now update your script so you can now try again with the extension
