const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

router.get('/', async(req, res) => {
    try{
        const user = await User.find();
        res.json(user);
    }catch(e){
        res.send('error - ' + e);
    }
})

router.get('/:id', async(req, res) => {
  try {
    const id = req.params.id;
    const result = await User.findOne({ _id: id });

    if (!result) {
      return res.status(404).json({ message: 'Запись не найдена' });
    }

    res.status(200).json(result);
  } catch (err) {
    console.error('Ошибка при получении данных', err);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

router.post('/', async(req, res) => {
    const user = new User({
        user_name: req.body.user_name, 
        phone: req.body.phone, 
        email: req.body.email, 
        age: req.body.age, 
        registered_at: req.body.registered_at, 
    })

    try{
        const user1 = await user.save();
        res.json(user1);
    } catch(e) {
        res.send('error' + e);
    }
})

router.put('/:id', async(req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body; 
    await User.updateOne({ _id: id }, { $set: newData });
    res.status(200).json({ message: 'Данные успешно обновлены' });
  } catch (err) {
    console.error('Ошибка при обновлении данных', err);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

router.delete('/:id', async(req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    res.status(200).json({ message: 'Данные успешно удалены' });
  } catch (err) {
    console.error('Ошибка при удалении данных', err);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = router;