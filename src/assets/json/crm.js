export const customerListData = [
    {
      'Name': 'John Doe',
      'Phone Number': '123-456-7890',
      'Email': 'john.doe@example.com',
      'RFID': 'RFID123',
      'VID': 'VID456',
      'Tariff': 'Basic',
    },
    {
      'Name': 'Jane Smith',
      'Phone Number': '987-654-3210',
      'Email': 'jane.smith@example.com',
      'RFID': 'RFID456',
      'VID': 'VID789',
      'Tariff': 'Premium',
    },
    {
      'Name': 'Alice Johnson',
      'Phone Number': '555-123-4567',
      'Email': 'alice.johnson@example.com',
      'RFID': 'RFID789',
      'VID': 'VID101',
      'Tariff': 'Gold',
    },
    {
      'Name': 'Bob Williams',
      'Phone Number': '444-789-0123',
      'Email': 'bob.williams@example.com',
      'RFID': 'RFID456',
      'VID': 'VID202',
      'Tariff': 'Silver',
    },
    {
      'Name': 'Eva Davis',
      'Phone Number': '222-333-4444',
      'Email': 'eva.davis@example.com',
      'RFID': 'RFID987',
      'VID': 'VID303',
      'Tariff': 'Premium',
    },
    // Add more entries as needed
  ];
  
  export const chargingTransactionData = [
    {
      'Transaction ID': 'TXN123',
      'Date': '2023-01-15',
      'Transaction Mode': 'Credit Card',
      'Units Consumed': '25.5 kWh',
      'Location Name': 'City Charging Station',
      'Duration(hh:mm:ss)': '01:30:00',
      'Chargepoint ID': 'CP001',
      'Connector ID': 'Connector1',
      'Total Amount': '$20.50',
      'CP Stop txn reason': 'Completed',
      'Close by': 'User',
    },
    {
      'Transaction ID': 'TXN456',
      'Date': '2023-02-03',
      'Transaction Mode': 'Mobile App',
      'Units Consumed': '30.2 kWh',
      'Location Name': 'Suburb Power Hub',
      'Duration(hh:mm:ss)': '02:15:30',
      'Chargepoint ID': 'CP002',
      'Connector ID': 'Connector2',
      'Total Amount': '$25.75',
      'CP Stop txn reason': 'User Stopped',
      'Close by': 'Station',
    },
    {
      'Transaction ID': 'TXN789',
      'Date': '2023-03-20',
      'Transaction Mode': 'RFID Card',
      'Units Consumed': '18.8 kWh',
      'Location Name': 'Green Energy Plaza',
      'Duration(hh:mm:ss)': '01:00:45',
      'Chargepoint ID': 'CP003',
      'Connector ID': 'Connector3',
      'Total Amount': '$15.20',
      'CP Stop txn reason': 'Error',
      'Close by': 'User',
    },
    // Add more entries as needed
  ];

  export const favouritesData = [
    {
      'ChargeStation': 'Downtown Charging Center',
      'Address': '123 Main Street, Cityville',
      'Longitude': '-73.987654',
      'Latitude': '40.789012',
      'Owner': 'City Power Solutions',
    },
    {
      'ChargeStation': 'Green Energy Hub',
      'Address': '456 Oak Avenue, Suburbia',
      'Longitude': '-74.012345',
      'Latitude': '40.567890',
      'Owner': 'EcoPower Solutions',
    },
    {
      'ChargeStation': 'Tech Park Charging Plaza',
      'Address': '789 Tech Drive, Innovation City',
      'Longitude': '-73.876543',
      'Latitude': '40.678901',
      'Owner': 'TechCharge Networks',
    },
    {
      'ChargeStation': 'Riverfront Charging Station',
      'Address': '321 Riverside Road, Waterside',
      'Longitude': '-74.123456',
      'Latitude': '40.890123',
      'Owner': 'River Power Systems',
    },
    {
      'ChargeStation': 'Mountain View EV Center',
      'Address': '555 Summit Trail, Heights',
      'Longitude': '-73.765432',
      'Latitude': '40.456789',
      'Owner': 'Peak Energy Solutions',
    },
    // Add more entries as needed
  ];

  
  export const accountTransactionData = [
    {
      'Date': 'Mar 18, 2023 6:22:10 AM',
      'InvoiceType': 'purchase',
      'Invoice ID': 'GC_180323_654321',
      'Total Amount': '₹ 420.75',
      'Status': 'Success',
      'Transaction': 'Debit',
      'Payment mode': 'Net Banking',
      'Order ID': 'order_ABC123',
      'External Payment reference': 'trans_987654',
    },
    {
      'Date': 'Apr 02, 2023 2:05:30 PM',
      'InvoiceType': 'subscription',
      'Invoice ID': 'GC_020423_876543',
      'Total Amount': '₹ 750',
      'Status': 'Success',
      'Transaction': 'Credit',
      'Payment mode': 'Stripe',
      'Order ID': 'order_XYZ456',
      'External Payment reference': 'trans_567890',
    },
    {
      'Date': 'May 10, 2023 4:45:15 PM',
      'InvoiceType': 'topup',
      'Invoice ID': 'GC_100523_123456',
      'Total Amount': '₹ 2000',
      'Status': 'Success',
      'Transaction': 'Credit',
      'Payment mode': 'Wallet',
      'Order ID': 'order_PQR789',
      'External Payment reference': 'trans_234567',
    },
    {
      'Date': 'Jun 25, 2023 8:30:00 AM',
      'InvoiceType': 'refund',
      'Invoice ID': 'GC_250623_789012',
      'Total Amount': '₹ 300',
      'Status': 'Pending',
      'Transaction': 'Credit',
      'Payment mode': 'Refund',
      'Order ID': 'order_RST345',
      'External Payment reference': 'trans_345678',
    },
    // Add more entries as needed
  ];
  
  