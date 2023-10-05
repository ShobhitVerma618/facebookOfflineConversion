const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3119; // You can change this to any port you prefer

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Route for receiving webhook POST requests
app.post('/Webhook2', (req, res) => {
  // Handle the incoming webhook data here
  const webhookData = req.body;

  // Process the webhook data as needed
  console.log('Received webhook data:', webhookData);
  if(webhookData.event.previous_data.status_type !== 'won'){
    if(webhookData.event.data.status_type === 'won'){
        moveAhead(webhookData.event.data)
    }
  }
  // Send a response (optional)
  res.status(200).json({ message: 'Webhook received successfully' });
});

//facebook event 
function moveAhead(data){
    console.log(data);
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
