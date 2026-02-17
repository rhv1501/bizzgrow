/**
 * Google Apps Script for BizzGrow Contact Form
 *
 * Instructions:
 * 1. Go to https://script.google.com/
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Update the SPREADSHEET_ID constant below
 * 5. Deploy as web app (Execute as: Me, Access: Anyone)
 * 6. Copy the web app URL to your .env.local file
 */

// Replace this with your Google Sheet ID
const SPREADSHEET_ID = "1vnQtye1TndmHqVjY6VgNJ3LtYzFngrTL6uiLT9z6MDg";
const SHEET_NAME = "Leads";

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);

    // Get the spreadsheet and sheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      // Add headers
      sheet
        .getRange(1, 1, 1, 7)
        .setValues([
          [
            "Timestamp",
            "Name",
            "Email",
            "Phone",
            "Company",
            "Message",
            "Source",
          ],
        ]);

      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#4285f4");
      headerRange.setFontColor("white");
    }

    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toLocaleDateString(),
      data.name || "",
      data.email || "",
      data.phone || "",
      data.company || "",
      data.message || "",
      data.source || "Website Contact Form",
    ];

    // Append the data to the sheet
    sheet.appendRow(rowData);

    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 7);

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Data saved successfully",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("Error in doPost:", error);

    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: "Error saving data: " + error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService.createTextOutput(
    JSON.stringify({
      message: "BizzGrow Contact Form Script is running!",
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Test function to verify the script works
 * Run this function in the Apps Script editor to test
 */
function testScript() {
  const testData = {
    timestamp: "6 Nov 2025",
    name: "Test User",
    email: "test@example.com",
    phone: "+1234567890",
    company: "Test Company",
    message: "This is a test message",
    source: "Script Test",
  };

  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData),
    },
  };

  const result = doPost(mockEvent);
  console.log("Test result:", result.getContent());
}
