const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')


yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: ' Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.addNotes(argv.title, argv.body)
  },
})

yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  handler: function () {
    console.log('Removing a new note!')
  },
})

yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: function () {
    console.log('Listing out all note')
  },
})

yargs.command({
  command: 'read',
  describe: 'Read a  note',
  handler: function () {
    console.log('Reading a note')
  },
})
yargs.parse()
// console.log(yargs.argv)
