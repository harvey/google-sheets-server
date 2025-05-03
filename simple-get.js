// @harvey on github

// Description: This script is a Google Apps Script that handles HTTP GET requests.
// It processes commands sent as URL parameters and interacts with a Google Sheets document.

// This is to be pasted into the Google Apps Script editor for a Google Sheet.

function doGet(e) {
    var command = Object.keys(e.parameter)[0];
    var data = e.parameter[command];
  
    if(command == 'input') {
      output = func(data);
    } else
    if(command == 'new_cell') {
      output = new_cell(data);
    } else
    if(command == 'read_cell') {
      output = read_cell(data);
    } else
    if(command == 'new_page') {
      output = new_page(data);
    } else {
      output = "INCORRECT COMMAND";
    }
  
    return ContentService
        .createTextOutput(output)
        .setMimeType(ContentService.MimeType.TEXT);
}
  
  function func(text) {
    return `Your input was ${text}`;
  }
  
  function new_cell(text) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([text]);
    return true;
  }
  
  function read_cell(text = "") {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var value;
  
    if (text !== "") {
      try {
        // Check if the text is a valid range
        var range = sheet.getRange(text);
        value = range.getValue();
      } catch (e) {
        // Handle invalid cell reference
        return "Please select a valid cell or leave blank to get the last cell in column A.";
      }
    } else {
      // Read the last row in column A
      var lastRow = sheet.getLastRow();
      value = sheet.getRange("A" + lastRow).getValue();
    }
  
    return value;
  }
  
  function new_page(title) {
    if (!title || typeof title !== "string" || title === "") {
      return "Please provide a valid title for the new sheet.";
    }
  
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    
    // Check if sheet with this title already exists
    if (spreadsheet.getSheetByName(title)) {
      return "A sheet with that title already exists.";
    }
  
    // Create the new sheet
    spreadsheet.insertSheet(title);
    return `New sheet '${title}' created successfully.`;
  }
  
  
  