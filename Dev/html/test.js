<script type="text/javascript">
  $(document).ready(function() {
    var frame = $('#frameAccount', window.parent.document);
    var height = jQuery("#container").height();
    frame.height(height + 100);
  });

  var idProduit = "",
    numPart = "";
  idProduitPS = "";

  //Methodes pour gérer le survolage des lignes du tableau (couleur et curseur modifiés)
  $("#accountsTable tr").not(':first').hover(function() {
    $(this).css("background", "#C0C0C0");
    $(this).css("cursor", "pointer");
  }, function() {
    $(this).css("background", "");
    $(this).css("cursor", "auto");
  });

  $("#actionsTable tr").not(':first').hover(function() {
    $(this).css("background", "#C0C0C0");
    $(this).css("cursor", "pointer");
  }, function() {
    $(this).css("background", "");
    $(this).css("cursor", "auto");
  });

  //On récupère les données propres à la ligne sélectionnée
  function getData(caller) {
    idProduit = $(caller).data('produit');
    numPart = $(caller).data('num');


    var iFrameTop = $('#frameAccount', window.parent.document).offset().top - 50;
    window.parent.$('html,body').animate({ scrollTop: iFrameTop }, 'slow');
  }

  function getDataPS(caller) {
    idProduitPS = $(caller).data('produit');

    var iFrameTop = $('#frameAccount', window.parent.document).offset().top - 50;
    window.parent.$('html,body').animate({ scrollTop: iFrameTop }, 'slow');
  }

  //Gestion de la modal avec la bonne iFrame
  $('#partModal').on('shown.bs.modal', function(e) {
    var src = "https://rohaninvest.microsoftcrmportals.com/suivi_compte_cc/?id=" + idProduit + "&num=" + numPart,
      id = $(this).attr('id');

    $('#frameSuivi').css({
      width: "100%",
      height: "400"
    }).attr('src', src);
  });

  //Gestion de la modal avec la bonne iFrame
  $('#partPSModal').on('shown.bs.modal', function(e) {
    var src = "https://rohaninvest.microsoftcrmportals.com/valeur_action/?id=" + idProduitPS,
      id = $(this).attr('id');

    $('#frameAction').css({
      width: "100%",
      height: "700"
    }).attr('src', src);
  });

  //Formatage des données numériques monétaires pour avoir des espaces pour les milliers
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ");
  }

  //Pour formater les champs concernés, leur apposer la classe "money"
  $('.money').each(function() {
    var v_pound = $(this).html();
    v_pound = numberWithCommas(v_pound);
    v_pound += " €";
    $(this).html(v_pound);

    if ($(this).html().trim() == "0 €") {
      $(this).html(" - ");
    }
  });
</script>
