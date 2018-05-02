<script type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script>
<script>
function showMailingPopUp() {
  require(
    ["mojo/signup-forms/Loader"],
    function(L) {
      L.start({"baseUrl":"mc.us3.list-manage.com","uuid":"279b072f7731d3c44289c5ffd","lid":"00ebaa9fc8"})
    });
};
document.getElementById("open-popup").onclick = function() {showMailingPopUp()};
</script>
