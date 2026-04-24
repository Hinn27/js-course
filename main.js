function openTab(evt, tabName) {
	var tabIndex, tabContent, tabLinks;

	//  tìm tất cả các phần tử có class "tabcontent", đặt style display thành "none" để ẩn
	tabContent = document.getElementsByClassName("tabContent");
	for (tabIndex = 0; tabIndex < tabContent.length; tabIndex++) {
		tabContent[tabIndex].style.display = "none";
	}

	// tìm tất cả các phần tử có class "tabLinks" và xoá active để ẩn
	tabLinks = document.getElementsByClassName("tabLinks");
	for (tabIndex = 0; tabIndex < tabLinks.length; tabIndex++) {
		tabLinks[tabIndex].className = tabLinks[tabIndex].className.replace(
			" active",
			"",
		);
	}

	// hiển thị tab được chọn và thêm class "active" vào nút được nhấn
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}
