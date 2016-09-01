/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const jwt = require('jwt-simple');

module.exports = {
	like: async (req, res) => {
		try {
			let newlike = await Like.create(req.body)
			res.ok({
				data: newlike
			})
		} catch (e) {
			res.serverError(e);
		}
	},
	unlike: async (req, res) => {
		try {
			let deletelike = await Like.delete({
				where: {
					userid: req.body.userid,
					songid: req.body.songid
				},
			})
			res.ok({
				data: deletelike
			})
		} catch (e) {
			res.serverError(e);
		}
	},
};
