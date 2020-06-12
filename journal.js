  let OnjaJournal = 
      [{
      title1: " Onja journal",
      content1: "\n Choose (1) if you want to entire \n Choose the (2) if want to visite the wibsite \n choose (3) if want to watch all the picture`", 
      },
       {
        title2: " this is the firt blog",
        content2: " \n\n content : there are many stdent at Onaja they are from different place in Madagascar but even that they still can undestand each other",
      },
      {
      title3: "Today was very good day",
      content3:  "\n\n content : Onja student have a picnic today because the weather is good and will go swim on the sea in Mahanoro " 

      },
   {title4: " special day at Onja ",
      content4: "friday is the special day at Onja",
    }];
    let continueProgram = 'yes';
    while (continueProgram === 'yes') {
      let listJournal =  prompt( "This is the greatest Onja journal \n Choose (1) if you want to entire \n Choose the (2) if want to visite the wibsite \n choose (3) if want to watch all the picture`");
      while(listJournal === 1 ) {
         listJournal =  prompt("This is the greatest Onja journal \n Choose (1) if you want to entire \n Choose the (2) if want to visite the wibsite \n choose (3) if want to watch all the picture ");
      }
      if (listJournal === "2" ) {
          alert( `${OnjaJournal.title2 } , ${ OnjaJournal.content2}`);
          alert(`${OnjaJournal.title3} , ${OnjaJournal.content3}`);
          alert(` ${OnjaJournal.title4}, ${ OnjaJournal.content4}`);
      }

     else {
        
     }
    }
    