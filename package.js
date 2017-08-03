Package.describe({
    name: 'matteodem:server-session',
    summary : "Serverside Session through a Meteor.Collection (get, set, equals etc.)",
    version: "0.5.2",
    git: "https://github.com/matteodem/meteor-server-session.git"
});

Package.on_use(function (api) {
    api.versionsFrom('METEOR@0.9.0');

    api.use('underscore', 'client');
    api.use('underscore', 'server');
    api.use(['livedata', 'mongo-livedata'], ['client', 'server']);

    api.export('ServerSession');

    api.add_files([
        'lib/server-session.js'
    ], ['client', 'server']
    );
});

Package.on_test(function (api) {
    api.use(
        ['matteodem:server-session', 'tinytest', 'test-helpers']
    );

    api.add_files(
        'tests/test-both.js',
        ['client', 'server']
    );
});
