describe('about User Controller operation.', function() {
	before(async (done) => {
		try {
			const res = await User.create({
        username: 'usertest1',
        password: '0000',
      });
			done();
		} catch (e) {
			done(e);
		}
	});
  it('create User should success.', async (done) => {
    const createThisUser = {
      username: 'creatuser',
      password: '0000',
    };
    try {
      const res = await request(sails.hooks.http.app)
      .post(`/api/user`)
      .send(createThisUser);
      sails.log.info('create user controller spec =>', res.body);
      res.status.should.be.eq(200);
      res.body.should.be.Object;
      res.body.data.password.should.be.equal(createThisUser.password);
      done();
    } catch (e) {
      done(e);
    }
  });
  it('login User should success.', async (done) => {
    const createThisUser = {
      username: 'usertest1',
      password: '0000',
    };
    try {
      const res = await request(sails.hooks.http.app)
      .post(`/api/login`)
      .send(createThisUser);
      sails.log.info('login user controller spec =>', res.body);
      res.status.should.be.eq(200);
      res.body.should.be.Object;
      res.body.data.token.should.be.ture;
      done();
    } catch (e) {
      done(e);
    }
  });

});
