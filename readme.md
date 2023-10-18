### demo xhr
Skapa en barebones server som kan läsa av filer och skicka dem med xhr

## Dependencies
This project uses the following packages
- node
- nodemon
- express
- fs

## Todo
- Basic express server
- Routes with responses
- Json data
- xhr (det blir fetch istället)

## Log
- Fick typeerror med sendfile att jag inte specificerade hela katalogen men fixade genom att använda app.use så att den vet att den ska titta in i public katalogen
- Clienten lyckas inte fetcha datan, kanske har med att göra att jag inte har sattit upp routes ännu
- Problemet visade sig vara att jag försökte fetcha med https istället för http
- data.foreach is not a function: löste genom att awaita datan att bli json i loadData.