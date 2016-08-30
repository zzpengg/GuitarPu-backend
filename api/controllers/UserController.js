/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const jwt = require('jwt-simple');

module.exports = {
	index: async (req, res) => {
		let newUser = await User.create({
			email: "123@456",
			password: '789'
		})
		res.ok({
			data: newUser
		})
	},
	
	register: async (req, res) => {
		let newUser = await User.create(req.body)
		res.ok({
			data: newUser
		})
	},
	
	login: async (req, res) => {
		try {
			let result = await User.findOne({
				where: req.body
			});
			if(result){
				var moment = require("moment");
		    var expires = moment().add(7, 'days').valueOf();
		    var token = jwt.encode({
		      iss: result.id,
		      exp: expires,
		      name: result.username
		    }, 'one ok rock');	
		   	res.ok({
					data: { token }
				})
			}else {
		  	res.forbidden()
			}
		} catch (e) {
			res.serverError(e);
		}
	
	},
	
	checkAuth: async (req, res) => {
		if(req.session.uid){
			res.ok({
				data: { 
					uid: req.session.uid,
					name: req.session.name,
				}
			})
		}else{
			res.forbidden()
		}
	
	},
};


            
