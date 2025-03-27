const Airtable = require('airtable');

module.exports = async () => {
  const base = new Airtable({apiKey: process.env.AIRTABLE_KEY}).base(process.env.AIRTABLE_BASE);
  
  const ciclisti = await base('Ciclisti').select().all();
  
  return ciclisti.map(record => ({
    nome: record.get('Nome'),
    squadra: record.get('Squadra'),
    foto: record.get('Foto')[0].url,
    palmares: record.get('Palmares')
  }));
};