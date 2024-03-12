const genId1 = require('rurb_xid');
const genId2 = require('grem_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|3D4o0WKlv3|' + genId2()).digest('base64');
}


module.exports = generateKey;
