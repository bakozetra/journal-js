// all jornal
class journal {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
  toString() {
    return `${this.title} ${this.content}`;
  }
}
const contents = [];
contents.push(new journal("Onja journal", "\n\n content : Onja student have a picnic today because the weather is good and will go swim on the sea in Mahanoro "));
contents.push(new journal(" this is the firt blog", "\n\n content : there are many stdent at Onaja they are from different place in Madagascar but even that they still can undestand each other"))
contents.push(new journal(" Today is good day ", "\n\n Friday is the special day at Onja"));

//the list of choice

let choice;
while (choice !== "0") {
  let choices = "\n choose (1) this is the about onja";
  choices += "\n choose (2) for listing all the entries";
  choices += "\n choose (3) for adding new entries";
  choices += "\n Quit";
  choice = prompt(`Choose an option: ${choices}`);

  // all conditions 

  switch (choice) {
    case "1": {
      if (contents.length > 0) {
        for (let i = 0; i < contents.length; i++) {
          alert(`${i + 1}: ${contents[i].toString()}`);
        }
      } else {
        alert("No comment can see!");
      }
      break;
    }
    case "2": {
      const title = prompt("Enter the title:");
      const content = prompt("Enter the content:");
      contents.push(new journal(title, content));
      break;
    }
    case "3": {
      if (contents.length > 0) {
        let otherContent = -1;
        const oldContent = contents.length;
        while (otherContent < 1 || otherContent > contents.length) {
          otherContent = Number(
            prompt(`Enter the index of the content to be removed (between 1 and ${oldContent}):`)
          );
        }
        contents.splice(otherContent - 1, 1);
      } else {
        alert("you can't change the content!");
      }
      break;
    }
  }
}

