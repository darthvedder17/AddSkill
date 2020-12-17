var moment = require('moment');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter()
var fs = require('fs');
var choice = process.env.NODE_ENV || 'development';
var stream = process.argv[3]
// console.log('stream value : ' + stream);

// Start reading from stdin so that we don't exit the process 
process.stdin.resume();



const mainDir =`./${choice}`;
const subDirsrc = `./${choice}/src`;
const subDirdest = `./${choice}/dest`;

	// Create Folders and subfolders for development or production
	var createFolder = eventEmitter.on('createFolder',()=>{

		if(!fs.existsSync(mainDir)){

			fs.mkdirSync(mainDir,{recursive:true});
			if((!fs.existsSync(subDirsrc)||(!fs.existsSync(subDirdest)))){

					fs.mkdirSync(subDirsrc);
					fs.mkdirSync(subDirdest);


			}
		}
		else{

			console.log('Directory already exists');


		}
	});


	// Create a Source File

	var createSrcFile = eventEmitter.on('createSourceFile',()=>{

       	if(fs.existsSync(mainDir) && fs.existsSync(subDirsrc)){
            // var fileName = moment.format('YYYY_MM_DD_HH_MM_SS');
          	fileName =moment().format('YYYY_MM_DD_HH_MM_SS');
// 
            try {
            	writeStream = fs.createWriteStream(`${subDirsrc}/${fileName}.txt`)
	            writeStream.write('Hey this is a source file');
	            writeStream.end();
				}
			catch(err){

				console.log(err)

			}
            

        }






	});
			
	// Create a destination File
	var createDestFile = eventEmitter.on('createDestFile',()=>{

			if(stream=='true'){

				var writeStream = fs.createWriteStream(`${subDirdest}/${fileName}.txt`);
				writeStream.write('This is a stream true file')
				writeStream.on('finish',()=>{


					console.log('Wrote all data to file');
				});
				writeStream.end();			
			}
			else if(stream =='false'){

				let data = 'Hey there I am destination file';
				// let fileName = moment().format('YYYY_MM_DD_HH_MM_SS');
				let path = `${subDirdest}/${fileName}.txt`		
				fs.writeFileSync(path,data,(err)=>{
					if(err) throw err;


				})

				console.log('The file has been saved');


			}

			else{

				console.log('Enter a stream Value');

			}





	});


	// Check for Ctrl+C Interrupt 
	process.on('SIGINT',()=>{

		console.log('Received Interrupt Signal');
		process.exit(2);
	})

createFolder.emit('createFolder');	
createSrcFile.emit('createSourceFile');
createDestFile.emit('createDestFile');





