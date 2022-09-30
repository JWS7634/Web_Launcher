function ReportType(type)
{
	document.getElementById('Report-Type').value = type;
}
function SendReport()
{
	sendPost('https://script.google.com/macros/s/AKfycbzo5BMiFuP-BoUHZ0Whs-SqoAG9oLT5fyDzIuTk1keVty_MyUbm5CnzmPaGDuRHqPx3/exec', { ReportType: document.getElementById('Report-Type').value, ReportContents: document.getElementById('Report-Contents').value})
}
function sendPost(url, params) {
    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('target', '_blank');
    form.setAttribute('action', url);
    document.charset = "UTF-8";

    for (var key in params) {
      var hiddenField = document.createElement('input');
      hiddenField.setAttribute('type', 'hidden');
      hiddenField.setAttribute('name', key);
      hiddenField.setAttribute('value', params[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  }