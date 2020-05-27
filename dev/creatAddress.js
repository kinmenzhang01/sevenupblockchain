

app.post('/creatAddress', function(req, res){
    const newTransaction = req.body;
    
    res.json({ note: 'NewAddress has be created successfully'});

});