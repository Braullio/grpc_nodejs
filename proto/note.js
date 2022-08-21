const proto = require('./notes_pb')

const note = new proto.Note()

note.setId('id-123')
note.setTitle('title')
note.setDescription('description')

console.log('---------------------------------------------')
console.log('~ note', note )
console.log('---------------------------------------------')

const serializedNote = note.serializeBinary()
console.log('~ serializedNote', serializedNote )
console.log('---------------------------------------------')

const deserialized = proto.Note.deserializeBinary(serializedNote)
console.log('~ deserialized', deserialized )
console.log('---------------------------------------------')