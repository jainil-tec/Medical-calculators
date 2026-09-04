/* MedCalc: temporarily remove the legacy 57+ drug library from the UI.
   The drug reference will be rebuilt later in a more useful format. */
(function () {
  function removeLegacyDrugData() {
    if (window.MEDCALC_CLINICAL_CONTENT) {
      window.MEDCALC_CLINICAL_CONTENT.drugs = {
        title: 'Drug Reference',
        intro: '',
        groups: []
      };
    }
  }

  function hideLegacyDrugSections() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var nodes = [];
    var n;
    while ((n = walker.nextNode())) {
      var t = n.nodeValue.trim();
      if (
        t === 'Drugs +' ||
        t === 'Drug Reference' ||
        t.indexOf('Open Drug Library') === 0
      ) nodes.push(n);
    }

    nodes.forEach(function (textNode) {
      var el = textNode.parentElement;
      if (!el) return;

      if (textNode.nodeValue.trim() === 'Drugs +' || textNode.nodeValue.trim().indexOf('Open Drug Library') === 0) {
        var p = el;
        for (var i = 0; i < 7 && p; i++, p = p.parentElement) {
          var txt = (p.textContent || '').replace(/\s+/g, ' ').trim();
          if (txt.indexOf('Drugs +') !== -1 && txt.indexOf('Open Drug Library') !== -1) {
            p.style.display = 'none';
            return;
          }
        }
      }

      if (textNode.nodeValue.trim() === 'Drug Reference') {
        var row = el;
        for (var j = 0; j < 5 && row; j++, row = row.parentElement) {
          var rtxt = (row.textContent || '').replace(/\s+/g, ' ').trim();
          if (rtxt === 'Drug Reference' || rtxt === '💊 Drug Reference') {
            row.style.display = 'none';
            return;
          }
        }
      }
    });
  }

  function clean() {
    removeLegacyDrugData();
    hideLegacyDrugSections();
  }

  clean();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', clean);
  }
  window.addEventListener('load', clean);
  setTimeout(clean, 100);
  setTimeout(clean, 500);
  setTimeout(clean, 1500);
  setTimeout(clean, 3000);
})();
