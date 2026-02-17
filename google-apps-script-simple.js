/**
 * SIMPLE Google Apps Script for Testing
 * Use this if you're having 401 errors with the main script
 */

function doPost(e) {
  try {
    // Log the request for debugging
    console.log("Received POST request:", e);

    // Simple response without touching spreadsheets
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Script is working!",
        receivedData: e.postData ? JSON.parse(e.postData.contents) : "No data",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("Error:", error);
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: "Error: " + error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      message: "BizzGrow Contact Form Script is running!",
      timestamp: new Date().toISOString(),
    })
  ).setMimeType(ContentService.MimeType.JSON);
}
