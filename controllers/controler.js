var ipfsAPI = require('ipfs-api')

// connect to ipfs daemon API server
var ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https'});
var URL_IPFS = "https://ipfs.io/ipfs/";


exports.upload_toIPFS = function(req, res) {
    var base64Image = req.body.file64;
    var fileName = req.body.fileName;
    var bufferFile = new Buffer(base64Image, 'base64');
    var response = [];
    var files = [{
          path: fileName,
          content: bufferFile
        }];
    ipfs.files.add(files, (err, result) => { 
        if(err){
            res.status(200).send(err);
        }
        response.push({
            result: result,
            url: URL_IPFS + result[0].hash
        });
        res.status(200).send(response);
    });    
};


exports.download_fromIPFS = function(req, res) {
    //This hash is returned hash of addFile router.
    var tx_hash = req.params.tx_hash;
    var response = [];
   
    ipfs.files.get(tx_hash, function (err, files) {
      
        files.forEach((file) => {
            response.push({
                path: file.path,
                content: file.content.toString('base64')
            });
        });
        
        res.status(200).send(response);
    });
};


