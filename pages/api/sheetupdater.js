export default function handler(req, res) {
  try {
    const client = new google.auth.JWT(
      keys.client_email, null, keys.private_key, ['https://www.googleapis.com/auth/spreadsheets']
    );

    client.authorize(async function (err, tokens) {
      if (err) {
        return res.status(400).send(JSON.stringify({ error: true }));
      }

      const sheets = google.sheets({ version: 'v4', auth: client });

        // Define the spreadsheet ID and range
  const spreadsheetId = '1cq2Xy_McXji3leDCRRHy7paVyckxpiHqq4Bat_Kw1tY';
  const range = 'Nextjs!A6'
  console.log(range)

  // Define the new value to be set in cell A6
  const new_value = 'Hello, World!';

  // Prepare the request
  const request = {
    spreadsheetId: spreadsheetId,
    range: range,
    valueInputOption: 'RAW',
    resource: {
      values: [[new_value]],
    },
  };

  // Update cell A6 with a new value
  sheets.spreadsheets.values.update(request, function (err, response) {
    if (err) {
      console.error('The API returned an error:', err);
      return;
    }

    console.log('Value added to cell A6.');
  });
      return res.status(400).send(JSON.stringify({ error: false, data: data.data.values }));
    });
  } catch (e) {
    return res.status(400).send(JSON.stringify({ error: true, message: e.message }));
  }
}
