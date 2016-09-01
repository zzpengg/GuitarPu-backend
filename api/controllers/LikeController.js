/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	like: async (req, res) => {
		try {
			let newlike = await Like.find({
				where: {
					UserId: req.session.uid,
					SongId: req.body.SongId,
				}
			});
			if(newlike === null){
				newlike = await Like.create({
					UserId: req.session.uid,
					SongId: req.body.SongId,
				})
			}
			res.ok({
				data: newlike
			})
		} catch (e) {
			res.serverError(e);
		}
	},
	unlike: async (req, res) => {
		try {
			let deletelike = await Like.destroy({
				where: {
					UserId: req.session.uid,
					SongId: req.body.SongId,
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
