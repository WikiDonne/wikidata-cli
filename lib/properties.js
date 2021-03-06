module.exports = {
  mainProps: [ 'P31', 'P279' ],
  propTypes: {
    ExternalId: { factor: 0.1, color: 'dim' },
    String: { factor: 1 },
    WikibaseItem: { factor: 1 },
    Time: { factor: 1 },
    Monolingualtext: { factor: 2 },
    Quantity: { factor: 1 },
    WikibaseProperty: { factor: 1 },
    Url: { factor: 0.5 },
    CommonsMedia: { factor: 0.5 },
    GlobeCoordinate: { factor: 0.5 }
  }
}
