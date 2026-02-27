import Joi from 'joi';

export const validateUser = (req, res, next) => {

  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required()
  });

  const { error } = schema.validate(req.body);

 
  if (error) {
    return next(new Error(error.details[0].message)); 
  }
  
 
  next(); 
};