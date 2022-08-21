const grpc = require('grpc')
const NotesDefinition = grpc.load( require( 'path' ).resolve( __dirname, '../proto/notes.proto' ) )

const client = new NotesDefinition.NoteService( 'localhost:9756', grpc.credentials.createInsecure() )

client.list( {}, ( err, notes ) => {
    if ( err ) throw err

    console.log( '\n# Abaixo devolutiva do List')
    console.log( notes )
} )

client.find( '1', ( err, note ) => {
    if ( err ) throw err
    if ( !note.id ) return console.log( 'Note not found' )

    console.log( '\n# Abaixo devolutiva do Find')

    return console.log( note )
})

client.add( { id: '3', title: 'Note 3', description: 'Content 3' }, ( err, note ) => {
    if ( err ) throw err

    console.log( '\n# Abaixo devolutiva do Add')

    return console.log( note )
})