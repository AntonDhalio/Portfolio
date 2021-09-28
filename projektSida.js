$(document).ready(function(){

    //AJAX
    $.ajax({
        method: "GET",
        url: "projektSida.xml",
        dataType: "xml",
        async:true, 
    
        //Hämtar all data
    }).done(function (document){
        printData(document);
    })
    
    //METODER

    function printData (document){

        //Hämtar all data ur variabeln "Document" samt skapar en loop
        $(document).find("project").each(function(){

            //Variabler för ökad läsbarhet, hämtar texten ur xml-taggarna
            var title = $(this).find("title").text();
            var manager = $(this).find("manager").text();
            var customer = $(this).find("customer").text();
            var startDate = $(this).find("startDate").text();
            var endDate = $(this).find("endDate").text();
            var image = $(this).find("image").text();
            var description = $(this).find("description").text();

            $(".projektDiv").append(
                "<div class='projektRuta'>" +
                "<img class='imgKlass' src='"+image+"'/>" +
                "<h2>"+title+"</h2>" +
                "<h3>"+"Manager"+"</h3>" +
                "<p>"+manager+"</p>" +
                "<h3>"+"Customer"+"</h3>" +
                "<p>"+customer+"</p>" +
                "<h3>"+"Duration"+"</h3>" +
                "<p>"+startDate+"</p>" +
                "<p>"+endDate+"</p>" +
                "<h3>"+"Description"+"</h3>" +
                "<p>"+description+"</p>" +
                "</div>"
            );

        });
    }

});