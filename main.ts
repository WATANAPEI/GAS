function myFunction() {
  console.time('test run start');
  console.log('test run.');
  appendLine();
  console.timeEnd('test run finished.');
}

function appendLine() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const values = sheet.getDataRange().getValues();
  values.push(['hunter x hunter', 'togashi', '2000', null, '430']);
  console.log(values);

}
