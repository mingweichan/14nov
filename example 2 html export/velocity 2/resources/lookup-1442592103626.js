(function(window, undefined) {
  var dictionary = {
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Desktop layout",
    "13265d8f-a518-4187-b616-20b7ddf54c92": "JOIN4",
    "83ea1de9-2eff-4fdd-a9f8-2c2743177ba9": "JOIN",
    "51d31b6d-51cc-406e-affd-54fdb8f888df": "JOIN3",
    "481561d0-ff14-4af6-af6d-099cacced780": "Mobile landscape layout",
    "5d0f59dc-a6d0-42be-874d-3a05a28943b4": "JOIN2",
    "fe06a7d7-2e97-40ba-8869-b647731bbbe8": "Mobile portrait layout",
    "3bbd530e-cb29-450e-97ca-ce7057b45211": "Tablet layout",
    "942e5448-8c5e-408c-9726-b36adab20d8c": "thanks",
    "3cc8fcf3-f524-49aa-8139-0f168d02c75e": "Template Mobile",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "596f2451-06f5-4a21-b967-73706cdfc975": "12",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "7bc68485-c9f8-4946-a1e9-b4f1937477cc": "1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "dbdfe2c0-c208-44f0-9be2-55e35f4962c9": "blank",
    "7af81ed5-179f-43ba-a16d-3249e7228c04": "hg"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);