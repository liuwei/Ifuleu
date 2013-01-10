Meteor.startup(function () {
    if (Geometries.find().count() === 0) {
        var geometries = [
            {
                "name" : "knight",
                "type": "ascii",
                "scale": "5",
                "url" : "https://www.filepicker.io/api/file/wEEjVqZrQ2ebYrpCVPn2"
            },
            {
                "name" : "sittingBox",
                "type": "ascii",
                "scale": "50",
                "url" : "https://www.filepicker.io/api/file/BqEyrqKtQc25GZDOc2Yq"
            }
    ];

        for (var i = 0; i < geometries.length; i++)
            Geometries.insert(geometries[i]);
    }
});