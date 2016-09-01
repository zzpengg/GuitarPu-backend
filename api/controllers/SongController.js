/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	findAll: async (req, res) => {
		try {
			let result = await Song.findAll({
				include: [User] 
			});
			res.ok({
				data: result
			});
		} catch (e) {
			res.serverError(e);
		}
	},
	
	findOne: async (req, res) => {
		try {
			let result = await Song.findOne({
				where: {
					id: req.params.id
				},
				include: [User] 
			});
			res.ok({
				data: result
			});
		} catch (e) {
			res.serverError(e);
		}
	},
	
	create: async (req, res) => {
		try {
			req.body.UserId = req.session.uid;
			let result = await Song.create(req.body);
			res.ok({
				data: result
			});
		} catch (e) {
			res.serverError(e);
		}
	},
};
