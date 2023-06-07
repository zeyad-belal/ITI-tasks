const { Command } = require('commander');
const program = new Command();
const fs = require('fs')

program.command('add')
.description('add entry')
.requiredOption('-t,--title <string>','title indicates the title of entry')
.action(options=>{
  console.log(options)
  const dateString = fs.readFileSync('./db.json',{encoding:"utf8"})
  const data = JSON.parse(dateString)
  
  const lastEntry = data[data.length - 1];
  const newId = lastEntry ? lastEntry.id + 1 : 1;

  const newNote ={
    id: newId,
    title: options.title
  }
  data.push(newNote)
  fs.writeFileSync('./db.json',JSON.stringify(data))
})

program.command('list')
.description('list all items')
.action(()=>{
  const dataString = fs.readFileSync('./db.json',{encoding:'utf8'})
  const data = JSON.parse(dataString)
  console.log(data)
}
)

program.command('edit')
.description('list all items')
.option('-t,--title <string>','the new title')
.option('-i,--id <string>','note id')
.action((options)=>{
  const dataString = fs.readFileSync('./db.json',{encoding:'utf8'})
  const data = JSON.parse(dataString)
  data.forEach(note => {
    if(note.id == options.id){
      note.title = options.title
      console.log("success")
    }
  });
  fs.writeFileSync('./db.json',JSON.stringify(data))
}
)

program.command('delete')
.description('delete item by id')
.option('-i,--id <string>','note id')
.action((options)=>{
  const dataString = fs.readFileSync('./db.json',{encoding:'utf8'})
  let data = JSON.parse(dataString)
  data = data.filter(note => note.id != options.id)
  fs.writeFileSync('./db.json',JSON.stringify(data))
}
)


program.parse(process.argv)

//node index.js add --title 'zeyadTitle2'
//node index.js list
//node index.js edit --title 'newTitle' --id '1683922256591'
//node index.js delete --id '1683922256591'

