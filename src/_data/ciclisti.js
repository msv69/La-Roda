cconst Airtable = require('airtable');

module.exports = async () => {
  const base = new Airtable({
    apiKey: process.env.AIRTABLE_TOKEN, // Usa il PAT qui
    endpointUrl: 'https://api.airtable.com'
  }).base(process.env.AIRTABLE_BASE_ID);

  try {
    const records = await base('Ciclisti').select({
      view: 'Grid view'
    }).all();

    return records.map(record => ({
      id: record.id,
      nome: record.get('Nome'),
      squadra: record.get('Squadra'),
      foto: record.get('Foto')[0]?.url || '/img/placeholder.jpg',
      palmares: record.get('Palmarès') || []
    }));
    
  } catch (error) {
    console.error("Errore Airtable:", error);
    return [];
  }
};