$('.open-popup').magnificPopup({
	removalDelay: 500, //delay removal by X to allow out-animation
	callbacks: {
		beforeOpen: function () {
			this.st.mainClass = "mfp-zoom-in";
		},
		afterClose: function () {
		},
  },
  fixedContentPos: true,
  fixedBgPos: true,
	midClick: true,
});

$('.popup-close').click(function (e) {
	e.preventDefault();
	$.magnificPopup.close();
});