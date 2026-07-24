(function (_0x4bc5ef, _0x4a767e) {
    const _0x4b5a9d = _0x51a1, _0x3cfabc = _0x4bc5ef();
    while (true) {
        try {
            const _0xf6aa10 = -parseInt(_0x4b5a9d(208)) / 1 + -parseInt(_0x4b5a9d(344)) / 2 + parseInt(_0x4b5a9d(452)) / 3 + parseInt(_0x4b5a9d(260)) / 4 + parseInt(_0x4b5a9d(457)) / 5 + -parseInt(_0x4b5a9d(381)) / 6 + -parseInt(_0x4b5a9d(130)) / 7 * (parseInt(_0x4b5a9d(538)) / 8);
            if (_0xf6aa10 === _0x4a767e) {
                break;
            } else {
                _0x3cfabc.push(_0x3cfabc.shift());
            }
        } catch (_0x5737ea) {
            _0x3cfabc.push(_0x3cfabc.shift());
        }
    }
}(_0x314b, 840456));
!(function () {
    'use strict';
    const _0x2ae430 = _0x51a1;
    let _0x41f421 = null;
    function _0x5309e8() {
        const _0x460e17 = _0x51a1;
        if (null === _0x41f421) {
            return Math.random();
        }
        let _0xd04fd8 = 0 | _0x41f421;
        _0xd04fd8 = _0xd04fd8 + 1831565813 | 0;
        let _0xc467b5 = Math.imul(_0xd04fd8 ^ _0xd04fd8 >>> 15, 1 | _0xd04fd8);
        return _0xc467b5 = _0xc467b5 + Math[_0x460e17(423)](_0xc467b5 ^ _0xc467b5 >>> 7, 61 | _0xc467b5) ^ _0xc467b5, _0x41f421 = _0xd04fd8, ((_0xc467b5 ^ _0xc467b5 >>> 14) >>> 0) / 4294967296;
    }
    function _0xe3d09d(_0x13c5f3, _0xbdbec8, _0x46484c) {
        const _0x2cd51c = _0x51a1;
        return Math[_0x2cd51c(398)](_0xbdbec8, Math[_0x2cd51c(449)](_0x46484c, _0x13c5f3));
    }
    function _0x4faedf(_0x559ff4, _0x2e545f) {
        return _0x559ff4 + _0x5309e8() * (_0x2e545f - _0x559ff4);
    }
    function _0x704bac(_0x5f26ef, _0x8522ed) {
        return Math.floor(_0x4faedf(_0x5f26ef, _0x8522ed + 1));
    }
    function _0x3bcbbb(_0xd2ca0) {
        const _0x3de191 = _0x51a1;
        return _0xd2ca0[Math[_0x3de191(433)](_0x5309e8() * _0xd2ca0.length)];
    }
    function _0x39f973(_0x431a94, _0xdb1f66) {
        const _0x543c2e = _0x51a1, _0x47b22b = _0xdb1f66 || (_0x54b518 => null != _0x54b518[_0x543c2e(490)] ? _0x54b518[_0x543c2e(490)] : _0x54b518.w), _0x441945 = _0x431a94[_0x543c2e(310)]((_0x1debdd, _0x2d7852) => _0x1debdd + _0x47b22b(_0x2d7852), 0);
        let _0x5e538d = _0x5309e8() * _0x441945;
        for (const _0x5d73e1 of _0x431a94)
            if (_0x5e538d -= _0x47b22b(_0x5d73e1), _0x5e538d <= 0) {
                return _0x5d73e1;
            }
        return _0x431a94[_0x431a94[_0x543c2e(546)] - 1];
    }
    function _0x150a36(_0x658f55) {
        return COUNTRIES.find(_0x363e79 => _0x363e79.id === _0x658f55);
    }
    function _0x235548(_0xb1f94b) {
        const _0x1a0b99 = _0x51a1;
        return LEVELS[_0xb1f94b] ? LEVELS[_0xb1f94b][_0x1a0b99(282)] : 0;
    }
    function _0x1d465c(_0x36ec0c, _0x105951) {
        const _0x144efc = _0x51a1;
        return _0x36ec0c[_0x144efc(171)] && _0x36ec0c[_0x144efc(171)][_0x105951.id] || _0x105951[_0x144efc(396)];
    }
    function _0x3ab06f(_0xbdc993) {
        const _0x3cf470 = _0x51a1, _0x61f623 = BALANCE[_0x3cf470(503)][_0x1d465c(_0xbdc993, _0xbdc993[_0x3cf470(270)])], _0xd216dd = _0x150a36(_0xbdc993[_0x3cf470(270)][_0x3cf470(275)]) || {};
        return _0x61f623 * (_0xd216dd.exotic ? 0.5 : _0xd216dd[_0x3cf470(406)] || 1);
    }
    function _0x63b484(_0x3beb53, _0x269c80, _0x5ca74d) {
        const _0x5498ca = _0x51a1;
        _0x3beb53[_0x5498ca(171)][_0x269c80.id] = _0x5ca74d;
    }
    function _0x13270a(_0x303555, _0xc633b1, _0x2e83af) {
        const _0x48ed42 = _0x51a1, _0x52ff81 = _0xe3d09d(LEVEL_ORDER[_0x48ed42(256)](_0x1d465c(_0x303555, _0xc633b1)) + _0x2e83af, 0, LEVEL_ORDER[_0x48ed42(546)] - 1);
        return _0x63b484(_0x303555, _0xc633b1, LEVEL_ORDER[_0x52ff81]), LEVEL_ORDER[_0x52ff81];
    }
    function _0x239a0d(_0x3c34bb) {
        const _0x417947 = _0x51a1;
        if (_0x3c34bb >= 1000) {
            return (_0x3c34bb / 1000)[_0x417947(299)](1).replace('.', ',') + _0x417947(450);
        }
        if (_0x3c34bb > 0 && _0x3c34bb < 0.1) {
            return Math[_0x417947(398)](1, Math.round(1000 * _0x3c34bb)) + _0x417947(455);
        }
        const _0x212588 = _0x3c34bb >= 10 ? Math[_0x417947(250)](_0x3c34bb) : Math.round(10 * _0x3c34bb) / 10;
        return String(_0x212588).replace('.', ',') + _0x417947(370);
    }
    const _0x2e54b5 = {
        'formation': 1,
        'sportif': 1,
        'quartier': 2,
        'futsal': 2,
        'tardif': -2
    };
    function _0xfbf201(_0x33bbd5, _0x2fa79d, _0x468d7f) {
        let _0x28e5f9 = 72 + _0x704bac(-4, 14);
        return _0x28e5f9 += _0x2e54b5[_0x33bbd5.id] || 0, _0x28e5f9 += _0x2fa79d ? _0x2fa79d.potBonus : 0, _0x468d7f && 'family' === _0x468d7f.id && (_0x28e5f9 += 1), _0xe3d09d(_0x28e5f9, 68, 97);
    }
    function _0x64bc3c(_0x350f0d) {
        const _0x143298 = _0x51a1, _0x3efb3a = BALANCE;
        let _0x1cba99 = _0x3efb3a[_0x143298(245)];
        return _0x1cba99 += _0x3efb3a.prodigyOrigin[_0x350f0d[_0x143298(540)].id] || 0, _0x350f0d[_0x143298(354)] && (_0x1cba99 += _0x3efb3a.prodigyLifestyle[_0x350f0d[_0x143298(354)].id] || 0), _0x350f0d.entourage && (_0x1cba99 += _0x3efb3a[_0x143298(154)][_0x350f0d[_0x143298(399)].id] || 0), _0x1cba99 *= _0x350f0d[_0x143298(440)] ? _0x350f0d[_0x143298(440)][_0x143298(490)] : 1, _0xe3d09d(_0x1cba99, 0, _0x3efb3a[_0x143298(409)]);
    }
    function _0x15d8b1(_0x32779b) {
        return _0x39f973(TRAJECTORIES, _0x16e4cd => {
            const _0x532095 = _0x51a1;
            let _0x4202b7 = _0x16e4cd.w;
            return _0x532095(495) !== _0x32779b.id || _0x532095(336) !== _0x16e4cd.id && 'surge' !== _0x16e4cd.id || (_0x4202b7 *= 4), _0x532095(495) !== _0x32779b.id || _0x532095(355) !== _0x16e4cd.id && 'flash' !== _0x16e4cd.id || (_0x4202b7 *= 0.2), _0x4202b7;
        });
    }
    const _0x35ac81 = {
            'formation': {
                'd1': 8,
                'elite': 6,
                'regional': -10
            },
            'sportif': {
                'elite': 10,
                'd1': 4
            },
            'quartier': {
                'regional': 10,
                'd2': 4,
                'elite': -4
            },
            'futsal': {
                'd2': 6,
                'd1': 2
            },
            'tardif': {
                'regional': 16,
                'd2': 2,
                'd1': -8,
                'elite': -8
            }
        }, _0x54d05d = {
            'pro': {
                'd1': 4,
                'elite': 4
            },
            'balance': {},
            'street': { 'elite': -4 }
        }, _0x766218 = {
            'elite': 'Centre d\'élite \u2014 infrastructures de pointe, concurrence féroce',
            'd1': _0x2ae430(420),
            'd2': 'Club formateur solide \u2014 du temps de jeu et de vrais éducateurs',
            'regional': _0x2ae430(284)
        }, _0x423623 = [
            'fr',
            'es',
            'it',
            'de',
            'en',
            'nl',
            'be',
            'pt'
        ], _0x17b3fb = {
            'sn': [_0x2ae430(397)],
            'ci': ['fr_lens'],
            'gn': [_0x2ae430(289)]
        };
    function _0x1bec9b(_0x2fa056) {
        const _0x5b074a = _0x2ae430, _0x35d128 = { ...BALANCE.academyWeights }, _0x4177ac = _0x570b56 => {
                for (const _0x1cdbd1 in _0x570b56)
                    _0x35d128[_0x1cdbd1] = (_0x35d128[_0x1cdbd1] || 0) + _0x570b56[_0x1cdbd1];
            };
        _0x4177ac(_0x35ac81[_0x2fa056[_0x5b074a(540)].id] || {});
        _0x4177ac(_0x54d05d[_0x2fa056[_0x5b074a(354)].id] || {});
        _0x2fa056[_0x5b074a(399)] && _0x2fa056[_0x5b074a(399)][_0x5b074a(281)] && _0x4177ac(_0x2fa056[_0x5b074a(399)][_0x5b074a(281)]);
        _0x2fa056.potCap >= 88 ? _0x4177ac({
            'elite': 10,
            'd1': 6
        }) : _0x2fa056[_0x5b074a(445)] <= 76 && _0x4177ac({ 'elite': -8 });
        ;
        for (const _0x208cf5 in _0x35d128)
            _0x35d128[_0x208cf5] = Math[_0x5b074a(398)](0, _0x35d128[_0x208cf5]);
        return _0x35d128;
    }
    function _0x586fa4(_0xaf073e, _0x9c1904, _0xcdace0, _0x106706) {
        const _0x3c10b4 = _0x2ae430, _0x443d02 = _0x5cd372 => CLUBS_BY_LEVEL[_0x5cd372][_0x3c10b4(173)](_0x35f8c8 => _0x35f8c8[_0x3c10b4(275)] === _0xaf073e && !_0xcdace0.has(_0x35f8c8.id) && (_0x106706 || _0x3c10b4(206) !== _0x5cd372)), _0x35393b = Object.entries(_0x9c1904).filter(([_0x5e3ca1, _0x232e45]) => _0x232e45 > 0 && _0x443d02(_0x5e3ca1)[_0x3c10b4(546)]);
        if (_0x35393b[_0x3c10b4(546)]) {
            return _0x3bcbbb(_0x443d02(_0x39f973(_0x35393b, _0x56aacf => _0x56aacf[1])[0]));
        }
        for (const _0x11782e of LEVEL_ORDER) {
            const _0x2f8f96 = _0x443d02(_0x11782e);
            if (_0x2f8f96[_0x3c10b4(546)]) {
                return _0x3bcbbb(_0x2f8f96);
            }
        }
        return null;
    }
    function _0x5beecf(_0x329034) {
        const _0x240345 = _0x2ae430, _0x2f8644 = _0x329034[_0x240345(440)][_0x240345(330)];
        if ('ma' === _0x2f8644) {
            return function (_0x9672b4) {
                const _0x29397e = _0x240345, _0x3e1fb7 = _0x1bec9b(_0x9672b4), _0x40a3e0 = new Set(), _0x364016 = [], _0x5ad1fd = [
                        [
                            'ma',
                            false
                        ],
                        [
                            'ma',
                            false
                        ],
                        [
                            'fr',
                            true
                        ],
                        [
                            'es',
                            true
                        ],
                        [
                            'nl',
                            true
                        ]
                    ];
                for (const [_0x2b6d8f, _0x120367] of _0x5ad1fd) {
                    const _0x4728f7 = _0x586fa4(_0x2b6d8f, _0x3e1fb7, _0x40a3e0, _0x120367 && _0x9672b4[_0x29397e(445)] >= 82);
                    _0x4728f7 && (_0x40a3e0[_0x29397e(177)](_0x4728f7.id), _0x364016[_0x29397e(262)]({
                        'club': _0x4728f7,
                        'level': _0x4728f7[_0x29397e(396)],
                        'foreign': _0x120367,
                        'blurb': _0x120367 ? _0x29397e(139) : _0x766218[_0x4728f7.level]
                    }));
                }
                return _0x364016[_0x29397e(176)]((_0x2dc109, _0x951ae6) => _0x235548(_0x2dc109.level) - _0x235548(_0x951ae6[_0x29397e(396)])), _0x364016;
            }(_0x329034);
        }
        const _0x2d3b5f = _0x1bec9b(_0x329034), _0x533009 = _0x1e60be => CLUBS_BY_LEVEL[_0x1e60be][_0x240345(173)](_0x3e2f8c => _0x3e2f8c[_0x240345(275)] === _0x2f8644), _0x2be4f7 = _0x20ce3d => _0x240345(206) === _0x20ce3d ? [] : CLUBS_BY_LEVEL[_0x20ce3d][_0x240345(173)](_0x56907e => _0x423623.includes(_0x56907e[_0x240345(275)]) && _0x56907e[_0x240345(275)] !== _0x2f8644), _0x1e7532 = function (_0x4f666c) {
                const _0x34bb32 = _0x240345;
                return 'af' === (_0x150a36(_0x4f666c) || {})[_0x34bb32(531)] ? 0.5 : CLUBS_BY_LEVEL[_0x34bb32(206)][_0x34bb32(444)](_0x132124 => _0x132124[_0x34bb32(275)] === _0x4f666c) ? 0.06 : 0.18;
            }(_0x2f8644);
        for (const _0x3afccb in _0x2d3b5f)
            _0x533009(_0x3afccb).length || _0x1e7532 > 0 && _0x2be4f7(_0x3afccb)[_0x240345(546)] || (_0x2d3b5f[_0x3afccb] = 0);
        const _0x4e8257 = _0x704bac(6, 7), _0x413bdd = new Set(), _0x39f8f0 = [], _0x4f9474 = _0x17b3fb[_0x2f8644] || [], _0x249070 = _0x43985a => {
                const _0xa61c9c = _0x240345, _0x24d4f7 = _0x2be4f7(_0x43985a)[_0xa61c9c(173)](_0xe72044 => !_0x413bdd[_0xa61c9c(324)](_0xe72044.id));
                return _0x24d4f7[_0xa61c9c(546)] ? _0x39f973(_0x24d4f7, _0x39cf62 => _0x4f9474[_0xa61c9c(168)](_0x39cf62.id) ? 10 : 'fr' === _0x39cf62[_0xa61c9c(275)] ? 2.5 : 1) : null;
            }, _0x5dedcd = _0x3209ad => {
                const _0x37c0b6 = _0x240345, _0x15f411 = [...LEVEL_ORDER][_0x37c0b6(176)]((_0x577029, _0x258325) => Math[_0x37c0b6(193)](_0x235548(_0x577029) - _0x235548(_0x3209ad)) - Math[_0x37c0b6(193)](_0x235548(_0x258325) - _0x235548(_0x3209ad)));
                for (const _0x3c3889 of _0x15f411) {
                    const _0x27bb8f = _0x533009(_0x3c3889)[_0x37c0b6(173)](_0x274edd => !_0x413bdd[_0x37c0b6(324)](_0x274edd.id));
                    if (_0x27bb8f[_0x37c0b6(546)]) {
                        return _0x3bcbbb(_0x27bb8f);
                    }
                }
                return null;
            };
        for (let _0x4670c8 = 0; _0x39f8f0[_0x240345(546)] < _0x4e8257 && _0x4670c8 < 5 * _0x4e8257; _0x4670c8++) {
            const _0x3f7c49 = Object[_0x240345(132)](_0x2d3b5f)[_0x240345(173)](([, _0x5271f9]) => _0x5271f9 > 0);
            if (!_0x3f7c49.length) {
                break;
            }
            const [_0x14a1ce] = _0x39f973(_0x3f7c49, _0x3b8e61 => _0x3b8e61[1]), _0x28e208 = _0x1e7532 > 0 && _0x5309e8() < _0x1e7532 ? _0x249070(_0x14a1ce) || _0x5dedcd(_0x14a1ce) : _0x5dedcd(_0x14a1ce) || _0x249070(_0x14a1ce);
            if (!_0x28e208) {
                continue;
            }
            _0x413bdd[_0x240345(177)](_0x28e208.id);
            const _0x4d5244 = _0x28e208.countryId !== _0x2f8644;
            _0x39f8f0[_0x240345(262)]({
                'club': _0x28e208,
                'level': _0x28e208[_0x240345(396)],
                'foreign': _0x4d5244,
                'blurb': _0x4d5244 ? _0x240345(175) : _0x766218[_0x28e208[_0x240345(396)]]
            });
        }
        const _0x44e72e = CLUBS_BY_LEVEL[_0x240345(206)][_0x240345(444)](_0x23f4d9 => _0x23f4d9[_0x240345(275)] === _0x2f8644), _0x54127d = (_0x329034[_0x240345(445)] >= 85 ? 0.4 : _0x329034[_0x240345(445)] >= 78 ? 0.2 : 0.07) * (_0x44e72e ? 0.5 : 1.3);
        if (_0x5309e8() < _0x54127d) {
            const _0x4e95b4 = CLUBS_BY_LEVEL.elite[_0x240345(173)](_0xd17e30 => _0xd17e30[_0x240345(275)] !== _0x2f8644 && !_0x413bdd[_0x240345(324)](_0xd17e30.id));
            if (_0x4e95b4[_0x240345(546)]) {
                const _0x3a71e2 = _0x39f973(_0x4e95b4, _0x7b261e => (_0x150a36(_0x7b261e[_0x240345(275)]) || {}).contMult ? 0.6 : 1);
                _0x39f8f0[_0x240345(262)]({
                    'club': _0x3a71e2,
                    'level': 'elite',
                    'foreign': true,
                    'surprise': true,
                    'blurb': _0x240345(136)
                });
            }
        }
        return _0x39f8f0[_0x240345(176)]((_0xce2edb, _0x536d5d) => _0x235548(_0xce2edb[_0x240345(396)]) - _0x235548(_0x536d5d[_0x240345(396)])), _0x39f8f0;
    }
    function _0x2b3379(_0x50acf7) {
        const _0x39c2b0 = NAME_POOLS[_0x50acf7] || NAME_POOLS.fr;
        return _0x3bcbbb(_0x39c2b0.first) + ' ' + _0x3bcbbb(_0x39c2b0.last);
    }
    function _0x16f96d(_0xb87323) {
        const _0x54c76b = _0x2ae430, _0xf6208d = _0xb87323.lifestyle || _0x3bcbbb(LIFESTYLES), _0x374107 = _0xb87323[_0x54c76b(399)] || _0x3bcbbb(ENTOURAGES), _0x16e8ec = _0xb87323[_0x54c76b(468)] || _0x15d8b1(_0xb87323[_0x54c76b(540)]), _0x578a02 = {
                'name': _0xb87323[_0x54c76b(274)] || _0x2b3379(_0xb87323[_0x54c76b(440)].id),
                'nationality': _0xb87323[_0x54c76b(440)],
                'origin': _0xb87323.origin,
                'position': _0xb87323[_0x54c76b(552)],
                'lifestyle': _0xf6208d,
                'entourage': _0x374107,
                'trajectory': _0x16e8ec,
                'sparkAge': _0x704bac(22, 26),
                'age': BALANCE[_0x54c76b(296)],
                'year': _0xb87323[_0x54c76b(358)] || BALANCE.startYear,
                'club': _0xb87323[_0x54c76b(270)],
                'coach': _0x3bcbbb(COACH_NAMES),
                'contract': {
                    'salary': 0.05,
                    'years': 3
                },
                'stats': {
                    't': 0,
                    'p': 0,
                    'm': 0,
                    'c': 0
                },
                'rep': 0,
                'form': 68,
                'moral': 70,
                'discipline': 50,
                'coachRel': 58,
                'teamRel': 60,
                'money': 0.05,
                'potCap': null != _0xb87323[_0x54c76b(445)] ? _0xb87323.potCap : _0xfbf201(_0xb87323[_0x54c76b(540)], _0xf6208d, _0x374107),
                'traits': [],
                'flags': {},
                'usedEvents': [],
                'recentEvents': (_0xb87323[_0x54c76b(479)] || [])[_0x54c76b(311)](),
                'scheduled': [],
                'injuryWeeks': 0,
                'seasonTrophies': [],
                'seasonAwards': [],
                'loan': null,
                'loanReturn': null,
                'objective': null,
                'lastSeason': null,
                'clubLevels': {},
                'clubMomentum': 0,
                'clubFade': 0,
                'awardCounts': {},
                'archetype': null,
                'leagueTitlesDetail': [],
                'continentalDetail': [],
                'momentWins': 0,
                'derbyWins': 0,
                'bestBallonRank': null,
                'prevClub': null,
                'natTeam': {
                    'active': false,
                    'retired': false,
                    'caps': 0,
                    'goals': 0
                },
                'totals': {
                    'matches': 0,
                    'goals': 0,
                    'assists': 0,
                    'cleanSheets': 0
                },
                'trophies': {
                    'league': 0,
                    'cup': 0,
                    'continental': 0,
                    'worldCup': 0,
                    'ballon': 0,
                    'goldenBoot': 0
                },
                'seasons': [],
                'transferHistory': [],
                'history': [],
                'peakOvr': 0,
                'clubsPlayed': [_0xb87323[_0x54c76b(270)].id],
                'continentsPlayed': [(_0x150a36(_0xb87323.club[_0x54c76b(275)]) || {})[_0x54c76b(531)] || 'eu'],
                'retiring': false,
                'careerEnded': false,
                'careerEndReason': null
            }, _0x40f1d9 = _0xb87323[_0x54c76b(540)].startStats;
        return _0x578a02[_0x54c76b(507)] = {
            't': _0x40f1d9.t,
            'p': _0x40f1d9.p,
            'm': _0x40f1d9.m,
            'c': _0x40f1d9.c
        }, _0x578a02[_0x54c76b(556)] = _0x40f1d9[_0x54c76b(556)], _0x54c76b(495) === _0xb87323[_0x54c76b(540)].id && (_0x578a02.flags[_0x54c76b(418)] = true), !_0xb87323[_0x54c76b(468)] && _0x5309e8() < _0x64bc3c({
            'origin': _0xb87323[_0x54c76b(540)],
            'lifestyle': _0xf6208d,
            'entourage': _0x374107,
            'nationality': _0xb87323[_0x54c76b(440)]
        }) && (_0x578a02[_0x54c76b(214)].prodigy = true, _0x578a02.potCap = _0xe3d09d(_0x704bac(BALANCE.prodigyPotMin, BALANCE[_0x54c76b(246)]), 68, 99), _0x578a02[_0x54c76b(468)] = TRAJECTORIES[_0x54c76b(308)](_0x3e5928 => _0x3e5928.id === (_0x5309e8() < 0.65 ? 'early' : _0x54c76b(140))) || _0x578a02.trajectory, _0x578a02[_0x54c76b(507)].t = _0xe3d09d(_0x578a02.stats.t + _0x704bac(9, 13), 1, 99), _0x578a02[_0x54c76b(507)].p = _0xe3d09d(_0x578a02[_0x54c76b(507)].p + _0x704bac(4, 7), 1, 99), _0x578a02[_0x54c76b(507)].m = _0xe3d09d(_0x578a02.stats.m + _0x704bac(2, 4), 1, 99), _0x578a02[_0x54c76b(507)].c = _0xe3d09d(_0x578a02.stats.c + _0x704bac(1, 3), 1, 99)), _0x54c76b(242) === _0x578a02.trajectory.id && (_0x578a02[_0x54c76b(445)] = _0xe3d09d(_0x578a02.potCap + 5, 68, 99)), _0x54c76b(140) === _0x578a02[_0x54c76b(468)].id && (_0x578a02.stats.t = _0xe3d09d(_0x578a02[_0x54c76b(507)].t + 4, 1, 99)), _0xa6ab68(_0x578a02, _0xf6208d.fx || {}), _0xa6ab68(_0x578a02, _0x374107.fx || {}), _0x374107.flag && (_0x578a02[_0x54c76b(214)][_0x374107[_0x54c76b(215)]] = true), _0xb87323[_0x54c76b(171)] && (_0x578a02.clubLevels = { ..._0xb87323[_0x54c76b(171)] }), _0x578a02.contract[_0x54c76b(395)] = 0.3 * _0x5d3b38(_0x578a02, _0xb87323.club), _0x578a02[_0x54c76b(266)][_0x54c76b(262)]({
            'age': _0x578a02[_0x54c76b(205)],
            'toClubName': _0xb87323[_0x54c76b(270)][_0x54c76b(274)],
            'countryName': _0x150a36(_0xb87323[_0x54c76b(270)][_0x54c76b(275)])[_0x54c76b(274)],
            'fee': null,
            'level': _0x1d465c(_0x578a02, _0xb87323[_0x54c76b(270)])
        }), _0x578a02[_0x54c76b(393)] = _0x1ba885(_0x578a02), _0x578a02;
    }
    function _0x1ba885(_0x2ad72d) {
        const _0x40fe8a = _0x2ae430;
        return Math[_0x40fe8a(250)](0.4 * _0x2ad72d[_0x40fe8a(507)].t + 0.25 * _0x2ad72d[_0x40fe8a(507)].p + 0.2 * _0x2ad72d[_0x40fe8a(507)].m + 0.15 * _0x2ad72d.stats.c);
    }
    function _0x16b0ff(_0xde2024, _0x9cf569) {
        const _0x36139e = _0x2ae430;
        return _0xde2024[_0x36139e(410)][_0x36139e(168)](_0x9cf569);
    }
    function _0x14e6ce(_0x3b0719, _0x4e78fe, _0x4f94e7) {
        const _0x43d433 = _0x2ae430;
        if (!_0x4e78fe) {
            return '';
        }
        const _0x5c7a14 = _0x150a36(_0x3b0719.club.countryId);
        let _0x288a65 = _0x4e78fe.replace(/\{club\}/g, _0x3b0719[_0x43d433(270)].name)[_0x43d433(337)](/\{coach\}/g, _0x3b0719[_0x43d433(512)])[_0x43d433(337)](/\{country\}/g, _0x5c7a14 ? _0x5c7a14.name : '')[_0x43d433(337)](/\{name\}/g, _0x3b0719[_0x43d433(274)])[_0x43d433(337)](/\{nat\}/g, _0x3b0719[_0x43d433(440)].name);
        return _0x288a65 = _0x4f94e7 && _0x4f94e7[_0x43d433(530)] ? _0x288a65.replace(/\{rival\}/g, _0x4f94e7[_0x43d433(530)]) : _0x288a65[_0x43d433(337)](/\{rival\}/g, 'votre grand rival'), _0x288a65;
    }
    const _0xb36bb1 = {
        't': 'Technique',
        'p': _0x2ae430(149),
        'm': 'Mental',
        'c': 'Charisme'
    };
    function _0xa6ab68(_0x5173ef, _0x2d9d84) {
        const _0x153e77 = _0x2ae430, _0x64e3cd = [];
        if (!_0x2d9d84) {
            return _0x64e3cd;
        }
        for (const _0x23ceca of [
                't',
                'p',
                'm',
                'c'
            ])
            if (_0x2d9d84[_0x23ceca]) {
                let _0x2c86a9 = _0x2d9d84[_0x23ceca];
                _0x2c86a9 > 0 && 't' === _0x23ceca && _0x16b0ff(_0x5173ef, _0x153e77(170)) && _0x5173ef[_0x153e77(205)] <= 23 && (_0x2c86a9 = Math[_0x153e77(250)](1.4 * _0x2c86a9));
                _0x5173ef[_0x153e77(507)][_0x23ceca] = _0xe3d09d(_0x5173ef.stats[_0x23ceca] + _0x2c86a9, 1, 99);
                _0x64e3cd.push({
                    'label': '' + (_0x2c86a9 > 0 ? '+' : '') + _0x2c86a9 + ' ' + _0xb36bb1[_0x23ceca],
                    'kind': _0x2c86a9 > 0 ? _0x153e77(329) : _0x153e77(403)
                });
                ;
            }
        if (_0x2d9d84.rep) {
            let _0x571b8e = _0x2d9d84[_0x153e77(556)];
            _0x571b8e > 0 && (_0x571b8e = Math.round(_0x571b8e * _0x3ab06f(_0x5173ef)));
            _0x571b8e > 0 && _0x16b0ff(_0x5173ef, _0x153e77(254)) && (_0x571b8e = Math[_0x153e77(250)](1.3 * _0x571b8e));
            _0x571b8e > 0 && _0x16b0ff(_0x5173ef, _0x153e77(359)) && (_0x571b8e = Math[_0x153e77(250)](0.85 * _0x571b8e));
            _0x5173ef[_0x153e77(556)] = _0xe3d09d(_0x5173ef[_0x153e77(556)] + _0x571b8e, 0, 100);
            _0x571b8e && _0x64e3cd.push({
                'label': '' + (_0x571b8e > 0 ? '+' : '') + _0x571b8e + ' Réputation',
                'kind': _0x571b8e > 0 ? _0x153e77(329) : _0x153e77(403)
            });
            ;
        }
        if (_0x2d9d84[_0x153e77(313)] && (_0x5173ef.form = _0xe3d09d(_0x5173ef[_0x153e77(313)] + _0x2d9d84.form, 5, 100), _0x64e3cd.push({
                'label': '' + (_0x2d9d84[_0x153e77(313)] > 0 ? '+' : '') + _0x2d9d84[_0x153e77(313)] + _0x153e77(537),
                'kind': _0x2d9d84.form > 0 ? 'good' : _0x153e77(403)
            })), _0x2d9d84[_0x153e77(272)] && (_0x5173ef[_0x153e77(347)] = _0xe3d09d(_0x5173ef[_0x153e77(347)] + _0x2d9d84[_0x153e77(272)], 5, 100), _0x64e3cd[_0x153e77(262)]({
                'label': '' + (_0x2d9d84.mor > 0 ? '+' : '') + _0x2d9d84.mor + ' Moral',
                'kind': _0x2d9d84.mor > 0 ? _0x153e77(329) : _0x153e77(403)
            })), _0x2d9d84.dis && (_0x5173ef[_0x153e77(298)] = _0xe3d09d(_0x5173ef[_0x153e77(298)] + _0x2d9d84[_0x153e77(224)], 5, 100), _0x64e3cd[_0x153e77(262)]({
                'label': '' + (_0x2d9d84.dis > 0 ? '+' : '') + _0x2d9d84[_0x153e77(224)] + ' Discipline',
                'kind': _0x2d9d84[_0x153e77(224)] > 0 ? _0x153e77(329) : _0x153e77(403)
            })), _0x2d9d84[_0x153e77(512)] && (_0x5173ef[_0x153e77(453)] = _0xe3d09d(_0x5173ef[_0x153e77(453)] + _0x2d9d84[_0x153e77(512)], 5, 100), _0x64e3cd[_0x153e77(262)]({
                'label': '' + (_0x2d9d84.coach > 0 ? '+' : '') + _0x2d9d84[_0x153e77(512)] + _0x153e77(421),
                'kind': _0x2d9d84[_0x153e77(512)] > 0 ? _0x153e77(329) : _0x153e77(403)
            })), _0x2d9d84[_0x153e77(481)] && (_0x5173ef[_0x153e77(188)] = _0xe3d09d(_0x5173ef.teamRel + _0x2d9d84[_0x153e77(481)], 5, 100), _0x64e3cd.push({
                'label': '' + (_0x2d9d84[_0x153e77(481)] > 0 ? '+' : '') + _0x2d9d84[_0x153e77(481)] + _0x153e77(388),
                'kind': _0x2d9d84[_0x153e77(481)] > 0 ? _0x153e77(329) : _0x153e77(403)
            })), _0x2d9d84[_0x153e77(180)]) {
            let _0xfdde0d = _0x2d9d84[_0x153e77(180)];
            _0xfdde0d > 0 && _0x16b0ff(_0x5173ef, 'mercenary') && (_0xfdde0d *= 1.2);
            _0x5173ef[_0x153e77(180)] = Math.max(0, _0x5173ef.money + _0xfdde0d);
            _0x64e3cd[_0x153e77(262)]({
                'label': '' + (_0xfdde0d > 0 ? '+' : '\u2212') + _0x239a0d(Math[_0x153e77(193)](_0xfdde0d)),
                'kind': _0xfdde0d > 0 ? _0x153e77(180) : 'bad'
            });
            ;
        }
        if (_0x2d9d84.salaryMult && (_0x5173ef[_0x153e77(363)][_0x153e77(395)] = Math.round(_0x5173ef.contract[_0x153e77(395)] * _0x2d9d84[_0x153e77(192)] * 100) / 100, _0x64e3cd[_0x153e77(262)]({
                'label': _0x153e77(165) + _0x239a0d(_0x5173ef[_0x153e77(363)][_0x153e77(395)]) + _0x153e77(196),
                'kind': _0x153e77(180)
            })), _0x2d9d84[_0x153e77(267)]) {
            const _0x47165d = ARCHETYPES[_0x153e77(308)](_0x2e2188 => _0x2e2188.id === _0x2d9d84[_0x153e77(267)]);
            _0x47165d && (_0x5173ef[_0x153e77(267)] = _0x47165d, _0x64e3cd[_0x153e77(262)]({
                'label': _0x153e77(392) + _0x47165d[_0x153e77(274)] + ' : ' + (_0x47165d[_0x153e77(338)] || _0x47165d[_0x153e77(491)]),
                'kind': _0x153e77(255)
            }));
        }
        if (_0x2d9d84.ban && (_0x5173ef[_0x153e77(339)] += _0x2d9d84[_0x153e77(239)], _0x64e3cd[_0x153e77(262)]({
                'label': '\u26D4 ' + _0x2d9d84[_0x153e77(239)] + _0x153e77(147),
                'kind': _0x153e77(403)
            })), _0x2d9d84.inj) {
            let _0x5ddf56 = _0x2d9d84[_0x153e77(424)];
            _0x16b0ff(_0x5173ef, _0x153e77(142)) && (_0x5ddf56 = Math.round(0.6 * _0x5ddf56));
            _0x16b0ff(_0x5173ef, 'glass') && (_0x5ddf56 = Math.round(1.5 * _0x5ddf56));
            _0x5173ef[_0x153e77(339)] += _0x5ddf56;
            _0x64e3cd[_0x153e77(262)]({
                'label': '\uD83E\uDE79 ' + _0x5ddf56 + _0x153e77(374),
                'kind': 'bad'
            });
            ;
        }
        if (_0x2d9d84.pot && (_0x5173ef[_0x153e77(445)] = _0xe3d09d(_0x5173ef.potCap + _0x2d9d84[_0x153e77(326)], 68, 99)), _0x2d9d84.clubBoost) {
            const _0xac8496 = _0x13270a(_0x5173ef, _0x5173ef[_0x153e77(270)], _0x2d9d84[_0x153e77(435)]);
            _0x64e3cd.push({
                'label': '\uD83C\uDFD7️ ' + _0x5173ef[_0x153e77(270)][_0x153e77(274)] + ' passe en ' + LEVELS[_0xac8496].short,
                'kind': _0x153e77(465)
            });
            _0x5173ef[_0x153e77(415)][_0x153e77(262)]({
                'age': _0x5173ef[_0x153e77(205)],
                'text': _0x153e77(426) + _0x5173ef[_0x153e77(270)].name + _0x153e77(207) + LEVELS[_0xac8496][_0x153e77(244)] + '.',
                'impact': 8
            });
            ;
        }
        if (_0x2d9d84.trait && !_0x16b0ff(_0x5173ef, _0x2d9d84[_0x153e77(255)])) {
            _0x5173ef[_0x153e77(410)].push(_0x2d9d84[_0x153e77(255)]);
            const _0x11f3e1 = TRAITS[_0x2d9d84[_0x153e77(255)]];
            _0x64e3cd.push({
                'label': _0x11f3e1[_0x153e77(462)] + ' Trait : ' + _0x11f3e1[_0x153e77(274)],
                'kind': _0x153e77(255)
            });
        }
        if (_0x2d9d84.flag && (_0x5173ef[_0x153e77(214)][_0x2d9d84[_0x153e77(215)]] = true), _0x2d9d84[_0x153e77(547)] && delete _0x5173ef[_0x153e77(214)][_0x2d9d84[_0x153e77(547)]], _0x2d9d84[_0x153e77(461)] && _0x5173ef.scheduled[_0x153e77(262)]({
                'id': _0x2d9d84[_0x153e77(461)].id,
                'age': _0x5173ef.age + _0x2d9d84.sched.inYears
            }), _0x2d9d84[_0x153e77(465)]) {
            _0x5173ef[_0x153e77(190)][_0x153e77(262)](_0x2d9d84[_0x153e77(465)]);
            const _0x2894d0 = COMPETITIONS[_0x2d9d84[_0x153e77(465)]];
            _0x2894d0 && _0x64e3cd.push({
                'label': _0x2894d0[_0x153e77(462)] + ' ' + _0x2894d0[_0x153e77(274)] + ' !',
                'kind': _0x153e77(465)
            });
        }
        if (_0x2d9d84[_0x153e77(261)]) {
            _0x5173ef[_0x153e77(178)] || (_0x5173ef[_0x153e77(178)] = []);
            _0x5173ef[_0x153e77(178)].push(_0x2d9d84[_0x153e77(261)]);
            ;
            const _0x492419 = AWARDS[_0x2d9d84[_0x153e77(261)]];
            _0x492419 && _0x64e3cd[_0x153e77(262)]({
                'label': _0x492419[_0x153e77(462)] + ' ' + _0x492419.name + ' !',
                'kind': _0x153e77(465)
            });
        }
        return !_0x2d9d84.natCall || _0x5173ef[_0x153e77(488)].active || _0x5173ef.natTeam.retired || (_0x5173ef[_0x153e77(488)].active = true, _0x64e3cd[_0x153e77(262)]({
            'label': _0x5173ef[_0x153e77(440)][_0x153e77(215)] + _0x153e77(199),
            'kind': _0x153e77(465)
        })), _0x2d9d84.natRetire && (_0x5173ef[_0x153e77(488)].active = false, _0x5173ef[_0x153e77(488)].retired = true, _0x64e3cd.push({
            'label': _0x5173ef[_0x153e77(440)].flag + ' Retraite internationale',
            'kind': _0x153e77(333)
        })), _0x2d9d84.retire && (_0x5173ef[_0x153e77(473)] = true, _0x64e3cd[_0x153e77(262)]({
            'label': _0x153e77(466),
            'kind': 'neutral'
        })), _0x2d9d84[_0x153e77(211)] && (_0x5173ef.careerEnded = true, _0x5173ef[_0x153e77(301)] = _0x2d9d84.end), _0x64e3cd;
    }
    function _0x5b47c4(_0x3847b0, _0x3d2331) {
        const _0x40d74f = _0x2ae430;
        if (_0x3d2331.scheduledOnly) {
            return false;
        }
        const _0xd76752 = _0x3d2331[_0x40d74f(155)] || {};
        if (false !== _0x3d2331.once && _0x3847b0[_0x40d74f(342)][_0x40d74f(168)](_0x3d2331.id)) {
            return false;
        }
        if (null != _0xd76752[_0x40d74f(182)] && _0x3847b0.age < _0xd76752[_0x40d74f(182)]) {
            return false;
        }
        if (null != _0xd76752[_0x40d74f(387)] && _0x3847b0[_0x40d74f(205)] > _0xd76752[_0x40d74f(387)]) {
            return false;
        }
        if (_0xd76752.levels && !_0xd76752.levels.includes(_0x1d465c(_0x3847b0, _0x3847b0[_0x40d74f(270)]))) {
            return false;
        }
        if (_0xd76752.pos && !_0xd76752[_0x40d74f(368)][_0x40d74f(168)](_0x3847b0[_0x40d74f(552)].id)) {
            return false;
        }
        if (_0xd76752[_0x40d74f(540)] && _0x3847b0[_0x40d74f(540)].id !== _0xd76752[_0x40d74f(540)]) {
            return false;
        }
        if (_0xd76752[_0x40d74f(354)] && _0x3847b0.lifestyle.id !== _0xd76752[_0x40d74f(354)]) {
            return false;
        }
        if (_0xd76752[_0x40d74f(399)] && _0x3847b0[_0x40d74f(399)].id !== _0xd76752[_0x40d74f(399)]) {
            return false;
        }
        const _0x2d4714 = _0x1ba885(_0x3847b0);
        if (null != _0xd76752[_0x40d74f(280)] && _0x2d4714 < _0xd76752.minOvr) {
            return false;
        }
        if (null != _0xd76752[_0x40d74f(427)] && _0x2d4714 > _0xd76752.maxOvr) {
            return false;
        }
        if (null != _0xd76752.minRep && _0x3847b0[_0x40d74f(556)] < _0xd76752[_0x40d74f(253)]) {
            return false;
        }
        if (null != _0xd76752.maxRep && _0x3847b0[_0x40d74f(556)] > _0xd76752[_0x40d74f(198)]) {
            return false;
        }
        if (null != _0xd76752[_0x40d74f(161)] && _0x3847b0[_0x40d74f(180)] < _0xd76752.minMoney) {
            return false;
        }
        if (null != _0xd76752.minBallon && _0x3847b0[_0x40d74f(365)][_0x40d74f(417)] < _0xd76752.minBallon) {
            return false;
        }
        if (null != _0xd76752.minForm && _0x3847b0[_0x40d74f(313)] < _0xd76752[_0x40d74f(413)]) {
            return false;
        }
        if (null != _0xd76752[_0x40d74f(343)] && _0x3847b0[_0x40d74f(313)] > _0xd76752[_0x40d74f(343)]) {
            return false;
        }
        if (null != _0xd76752[_0x40d74f(506)] && _0x3847b0.moral < _0xd76752.minMor) {
            return false;
        }
        if (null != _0xd76752.maxMor && _0x3847b0.moral > _0xd76752[_0x40d74f(138)]) {
            return false;
        }
        if (null != _0xd76752[_0x40d74f(373)] && _0x3847b0.discipline < _0xd76752[_0x40d74f(373)]) {
            return false;
        }
        if (null != _0xd76752[_0x40d74f(185)] && _0x3847b0[_0x40d74f(298)] > _0xd76752.maxDis) {
            return false;
        }
        if (null != _0xd76752.minCoach && _0x3847b0[_0x40d74f(453)] < _0xd76752[_0x40d74f(212)]) {
            return false;
        }
        if (null != _0xd76752[_0x40d74f(291)] && _0x3847b0[_0x40d74f(453)] > _0xd76752[_0x40d74f(291)]) {
            return false;
        }
        if (null != _0xd76752[_0x40d74f(234)] && _0x3847b0.teamRel < _0xd76752[_0x40d74f(234)]) {
            return false;
        }
        if (null != _0xd76752.maxTeam && _0x3847b0.teamRel > _0xd76752.maxTeam) {
            return false;
        }
        if (_0xd76752.flag && !_0x3847b0[_0x40d74f(214)][_0xd76752[_0x40d74f(215)]]) {
            return false;
        }
        if (_0xd76752[_0x40d74f(228)] && _0x3847b0[_0x40d74f(214)][_0xd76752[_0x40d74f(228)]]) {
            return false;
        }
        if (_0xd76752[_0x40d74f(255)] && !_0x16b0ff(_0x3847b0, _0xd76752[_0x40d74f(255)])) {
            return false;
        }
        if (_0xd76752[_0x40d74f(366)] && _0x16b0ff(_0x3847b0, _0xd76752[_0x40d74f(366)])) {
            return false;
        }
        if (true === _0xd76752[_0x40d74f(156)] && !_0x3847b0[_0x40d74f(488)].active) {
            return false;
        }
        if (false === _0xd76752[_0x40d74f(156)] && (_0x3847b0.natTeam.active || _0x3847b0[_0x40d74f(488)].retired)) {
            return false;
        }
        if (_0xd76752.homeContinent && (_0x150a36(_0x3847b0[_0x40d74f(440)][_0x40d74f(330)]) || {}).continent !== _0xd76752.homeContinent) {
            return false;
        }
        if (true === _0xd76752.wc && !_0x5e0923(_0x3847b0[_0x40d74f(557)])) {
            return false;
        }
        if (true === _0xd76752[_0x40d74f(539)] && !_0x3847b0[_0x40d74f(539)]) {
            return false;
        }
        if (false === _0xd76752[_0x40d74f(539)] && _0x3847b0.loan) {
            return false;
        }
        if (true === _0xd76752[_0x40d74f(227)] && _0x3847b0[_0x40d74f(270)][_0x40d74f(275)] === _0x3847b0[_0x40d74f(440)][_0x40d74f(330)]) {
            return false;
        }
        if (false === _0xd76752[_0x40d74f(227)] && _0x3847b0[_0x40d74f(270)][_0x40d74f(275)] !== _0x3847b0[_0x40d74f(440)].homeCountryId) {
            return false;
        }
        if (false === _0xd76752[_0x40d74f(379)] && _0x150a36(_0x3847b0[_0x40d74f(270)][_0x40d74f(275)])[_0x40d74f(548)]) {
            return false;
        }
        if (_0xd76752[_0x40d74f(447)]) {
            const _0x2370b6 = CLUBS[_0x40d74f(308)](_0x4bcf9b => _0x4bcf9b.id === _0x3847b0.clubsPlayed[0]);
            if (!_0x2370b6 || !_0xd76752.originLevel.includes(_0x2370b6.level)) {
                return false;
            }
        }
        return (!_0xd76752.notAtOriginClub || _0x3847b0[_0x40d74f(270)].id !== _0x3847b0[_0x40d74f(293)][0]) && (!(null != _0xd76752[_0x40d74f(498)] && _0x3847b0.seasons[_0x40d74f(173)](_0x4c6548 => _0x4c6548[_0x40d74f(312)] === _0x3847b0.club[_0x40d74f(274)]).length < _0xd76752[_0x40d74f(498)]) && !(null != _0xd76752[_0x40d74f(134)] && _0x5309e8() > _0xd76752.chance));
    }
    function _0x5ad82b(_0x1d8a50) {
        const _0x34fef = _0x2ae430, _0x4dbef1 = _0x1d8a50.scheduled[_0x34fef(181)](_0x72b47 => _0x1d8a50[_0x34fef(205)] >= _0x72b47.age);
        if (_0x4dbef1 >= 0) {
            const _0x497454 = _0x1d8a50[_0x34fef(288)].splice(_0x4dbef1, 1)[0], _0x31bbdd = EVENTS[_0x34fef(308)](_0x3c1959 => _0x3c1959.id === _0x497454.id);
            if (_0x31bbdd) {
                return _0x31bbdd;
            }
        }
        if (!_0x1d8a50[_0x34fef(267)] && _0x1d8a50.age >= 21) {
            const _0x51a10f = EVENTS.find(_0x55945a => _0x55945a.id === _0x34fef(303) + _0x1d8a50[_0x34fef(552)].id && !_0x1d8a50[_0x34fef(342)][_0x34fef(168)](_0x55945a.id));
            if (_0x51a10f) {
                return _0x1d8a50.usedEvents[_0x34fef(262)](_0x51a10f.id), _0x51a10f;
            }
        }
        const _0x14c7af = EVENTS[_0x34fef(173)](_0x21b705 => _0x5b47c4(_0x1d8a50, _0x21b705));
        if (0 === _0x14c7af.length) {
            return null;
        }
        const _0x343e58 = _0x39f973(_0x14c7af, _0x4ba7a9 => (_0x4ba7a9.w || 10) * (_0x1d8a50[_0x34fef(479)].includes(_0x4ba7a9.id) ? 0.3 : 1));
        return false !== _0x343e58[_0x34fef(332)] && _0x1d8a50.usedEvents[_0x34fef(262)](_0x343e58.id), _0x1d8a50[_0x34fef(479)][_0x34fef(262)](_0x343e58.id), _0x1d8a50[_0x34fef(479)][_0x34fef(546)] > 40 && _0x1d8a50[_0x34fef(479)][_0x34fef(174)](), _0x343e58;
    }
    function _0x5dddff(_0x446649, _0x29c9aa) {
        const _0x51126b = _0x2ae430, _0x33315a = _0x29c9aa[_0x51126b(155)];
        return !(_0x33315a && (null != _0x33315a.minRep && _0x446649[_0x51126b(556)] < _0x33315a[_0x51126b(253)] || null != _0x33315a[_0x51126b(198)] && _0x446649.rep > _0x33315a.maxRep || null != _0x33315a.minOvr && _0x1ba885(_0x446649) < _0x33315a.minOvr || null != _0x33315a.minMoney && _0x446649[_0x51126b(180)] < _0x33315a.minMoney || _0x33315a[_0x51126b(215)] && !_0x446649[_0x51126b(214)][_0x33315a[_0x51126b(215)]] || _0x33315a[_0x51126b(228)] && _0x446649[_0x51126b(214)][_0x33315a[_0x51126b(228)]]));
    }
    function _0x2408e4(_0x15c0be, _0x5eaaf9) {
        const _0x35a001 = _0x2ae430, _0x731397 = _0x39f973(_0x5eaaf9[_0x35a001(522)]), _0xdbc4d0 = _0xa6ab68(_0x15c0be, _0x731397.fx || {});
        let _0x2e251e = null;
        if (_0x731397.fx && _0x731397.fx[_0x35a001(460)] && _0x731397.fx.transfer[_0x35a001(545)]) {
            const _0x50ff3b = _0x434c52(_0x15c0be, _0x731397.fx[_0x35a001(460)]);
            _0x50ff3b.length && (_0x2863bc(_0x15c0be, _0x50ff3b[0]), _0x2e251e = _0x50ff3b[0][_0x35a001(270)], _0xdbc4d0.push({
                'label': '\u279C ' + _0x2e251e[_0x35a001(274)],
                'kind': _0x35a001(333)
            }));
        }
        const _0x55ba12 = _0x1f3856(_0x731397.fx);
        return _0x15c0be[_0x35a001(415)][_0x35a001(262)]({
            'age': _0x15c0be[_0x35a001(205)],
            'text': _0x731397.text,
            'impact': _0x55ba12
        }), {
            'outcome': _0x731397,
            'chips': _0xdbc4d0,
            'tone': _0xd005e3(_0x731397.fx, _0x55ba12),
            'movedTo': _0x2e251e
        };
    }
    function _0x1f3856(_0x466fc4) {
        const _0x24cd24 = _0x2ae430;
        if (!_0x466fc4) {
            return 0;
        }
        let _0x24aa95 = 0;
        for (const _0xfd7e8c of [
                't',
                'p',
                'm',
                'c',
                'rep'
            ])
            _0x24aa95 += _0x466fc4[_0xfd7e8c] || 0;
        return _0x24aa95 += 0.5 * (_0x466fc4[_0x24cd24(313)] || 0) + 0.5 * (_0x466fc4[_0x24cd24(272)] || 0) + 2 * (_0x466fc4[_0x24cd24(180)] || 0), _0x24aa95 += 0.3 * (_0x466fc4[_0x24cd24(224)] || 0) + 0.3 * (_0x466fc4.coach || 0) + 0.3 * (_0x466fc4[_0x24cd24(481)] || 0), _0x466fc4[_0x24cd24(465)] && (_0x24aa95 += 12), _0x466fc4.inj && (_0x24aa95 -= 0.8 * _0x466fc4[_0x24cd24(424)]), _0x466fc4[_0x24cd24(211)] && (_0x24aa95 = -100), _0x24aa95;
    }
    function _0xd005e3(_0x30fe05, _0x140bd7) {
        const _0x207dc4 = _0x2ae430;
        return _0x30fe05 && _0x30fe05[_0x207dc4(211)] ? _0x207dc4(532) : _0x30fe05 && _0x30fe05.trophy || _0x140bd7 >= 9 ? _0x207dc4(317) : _0x140bd7 >= 3 ? _0x207dc4(329) : _0x140bd7 <= -12 ? _0x207dc4(532) : _0x140bd7 <= -3 ? _0x207dc4(403) : _0x207dc4(333);
    }
    function _0x41c855(_0x2a5fbe, _0x50b775) {
        const _0x534e13 = _0x2ae430, _0x4fab6f = KEY_MOMENTS[_0x50b775];
        if (!_0x4fab6f) {
            return null;
        }
        let _0xa8f80b = _0x4fab6f[_0x2a5fbe[_0x534e13(552)].id] || ('gk' === _0x2a5fbe[_0x534e13(552)].id ? _0x4fab6f.gk : _0x4fab6f[_0x534e13(483)]) || _0x4fab6f[_0x534e13(470)];
        return Array.isArray(_0xa8f80b) && (_0xa8f80b = _0x3bcbbb(_0xa8f80b)), _0xa8f80b;
    }
    function _0x1686d5(_0x4a32bf, _0x33db95) {
        const _0x4163ea = _0x2ae430;
        let _0x82ebae = _0x33db95[_0x4163ea(508)];
        return _0x82ebae += 'gk' === _0x4a32bf.position.id ? (_0x4a32bf.stats.m - 60) / 300 : (_0x4a32bf[_0x4163ea(507)].t - 70) / 350, _0x82ebae += (_0x4a32bf[_0x4163ea(313)] - 60) / 500, _0x16b0ff(_0x4a32bf, 'clutch') && (_0x82ebae += 0.08), _0x5309e8() < _0xe3d09d(_0x82ebae, 0.15, 0.92);
    }
    function _0x560959(_0x2ff802, _0x36193b, _0x54589c) {
        const _0x46d8c4 = _0x2ae430, _0x2a2b6e = _0x1686d5(_0x2ff802, _0x54589c), _0x288627 = [];
        _0x2a2b6e && _0x54589c.repWin && _0x288627[_0x46d8c4(262)](..._0xa6ab68(_0x2ff802, { 'rep': _0x54589c[_0x46d8c4(252)] }));
        !_0x2a2b6e && _0x54589c[_0x46d8c4(553)] && _0x288627.push(..._0xa6ab68(_0x2ff802, { 'rep': _0x54589c[_0x46d8c4(553)] }));
        _0x2a2b6e && _0x54589c[_0x46d8c4(251)] && !_0x16b0ff(_0x2ff802, _0x54589c.traitWin) && _0x288627.push(..._0xa6ab68(_0x2ff802, { 'trait': _0x54589c[_0x46d8c4(251)] }));
        _0x54589c[_0x46d8c4(215)] && (_0x2ff802[_0x46d8c4(214)][_0x54589c[_0x46d8c4(215)]] = true);
        ;
        const _0xd999f6 = _0x54589c[_0x46d8c4(384)] || _0x36193b[_0x46d8c4(384)], _0x58d022 = _0x54589c[_0x46d8c4(219)] || _0x36193b.failText;
        return {
            'success': _0x2a2b6e,
            'text': _0x14e6ce(_0x2ff802, _0x2a2b6e ? _0xd999f6 : _0x58d022),
            'chips': _0x288627
        };
    }
    function _0x5e0923(_0x3080ce) {
        return _0x3080ce % 4 == 2;
    }
    function _0x4e27f8(_0x78951a) {
        const _0x94d7ad = _0x2ae430, _0x43eb9a = _0xaae09(_0x78951a), _0x3d3f53 = _0x78951a.nationality[_0x94d7ad(490)], _0x10c867 = null != _0x78951a[_0x94d7ad(440)][_0x94d7ad(265)] ? _0x78951a[_0x94d7ad(440)][_0x94d7ad(265)] : _0x3d3f53, _0x542d3d = 0.6 + _0x1ba885(_0x78951a) / 100 * 0.8 + (_0x16b0ff(_0x78951a, 'clutch') ? 0.15 : 0) + (_0x78951a[_0x94d7ad(214)][_0x94d7ad(356)] ? 0.1 : 0);
        delete _0x78951a.flags[_0x94d7ad(356)];
        let _0x54a50a = _0x39f973(WC_STAGES, _0x51caa3 => 'champion' === _0x51caa3.id || 'final' === _0x51caa3.id ? _0x51caa3[_0x94d7ad(504)] / 2 * (0.05 + _0x10c867 * _0x10c867 * _0x542d3d * BALANCE[_0x94d7ad(478)]) : _0x94d7ad(295) === _0x51caa3.id ? _0x51caa3[_0x94d7ad(504)] * (0.4 + _0x3d3f53 * _0x542d3d * 0.5) : _0x51caa3[_0x94d7ad(504)]);
        _0x43eb9a && (_0x54a50a = WC_STAGES[_0x94d7ad(308)](_0x198679 => _0x94d7ad(225) === _0x198679.id) || WC_STAGES.find(_0x455795 => _0x94d7ad(320) === _0x455795.id) || _0x54a50a);
        const _0x28e17d = !!_0x43eb9a || _0x94d7ad(320) === _0x54a50a.id || 'final' === _0x54a50a.id, _0x2d4696 = {
                'year': _0x78951a[_0x94d7ad(557)],
                'stage': _0x28e17d ? _0x94d7ad(225) : _0x54a50a.id,
                'label': _0x28e17d ? _0x94d7ad(494) : _0x54a50a.label,
                'text': _0x28e17d ? _0x94d7ad(487) : _0x54a50a[_0x94d7ad(169)],
                'finalPending': _0x28e17d,
                'champion': false,
                'goldenBall': false
            };
        _0x28e17d || ('semi' === _0x54a50a.id ? (_0x78951a.rep = _0xe3d09d(_0x78951a.rep + 4, 0, 100), _0x78951a[_0x94d7ad(347)] = _0xe3d09d(_0x78951a[_0x94d7ad(347)] - 4, 5, 100), _0x78951a[_0x94d7ad(415)][_0x94d7ad(262)]({
            'age': _0x78951a[_0x94d7ad(205)],
            'text': _0x54a50a[_0x94d7ad(551)] + ' de la Coupe du Monde ' + _0x78951a.year + '.',
            'impact': 8
        })) : _0x78951a.moral = _0xe3d09d(_0x78951a[_0x94d7ad(347)] - 3, 5, 100));
        const _0x26514c = _0x94d7ad(321) === _0x54a50a.id ? 3 : _0x94d7ad(314) === _0x54a50a.id ? 4 : 'quarter' === _0x54a50a.id ? 5 : _0x94d7ad(295) === _0x54a50a.id ? 6 : 7;
        _0x78951a.natTeam[_0x94d7ad(160)] += _0x26514c;
        const _0x54c1f1 = Math[_0x94d7ad(250)](_0x26514c * _0x78951a[_0x94d7ad(552)][_0x94d7ad(264)] * (0.4 + _0x78951a[_0x94d7ad(507)].t / 150) * _0x4faedf(0.5, 1.4));
        return _0x78951a[_0x94d7ad(488)][_0x94d7ad(443)] += _0x54c1f1, _0x2d4696.games = _0x26514c, _0x2d4696[_0x94d7ad(443)] = _0x54c1f1, _0x28e17d && (_0x2d4696[_0x94d7ad(249)] = _0x43eb9a || _0x41c855(_0x78951a, _0x94d7ad(247))), _0x43eb9a && (_0x2d4696[_0x94d7ad(510)] = true), _0x2d4696;
    }
    function _0xaae09(_0x571c48) {
        const _0x20abf4 = _0x2ae430;
        if (!_0x571c48[_0x20abf4(400)] || _0x20abf4(378) == typeof STORIES) {
            return null;
        }
        const _0x3579b2 = STORIES.find(_0x37351a => _0x37351a.id === _0x571c48[_0x20abf4(400)]);
        return _0x3579b2 && _0x3579b2.wcFinal && _0x571c48[_0x20abf4(205)] === _0x3579b2[_0x20abf4(555)][_0x20abf4(205)] ? _0x3579b2.wcFinal : null;
    }
    function _0x2224a3(_0x599d8b, _0x43e8e6, _0x36c3df) {
        const _0x1f782b = _0x2ae430, _0x26cb36 = _0x43e8e6.wc, _0x2c6952 = _0x26cb36[_0x1f782b(249)], _0xda722a = _0x2c6952[_0x1f782b(243)][_0x1f782b(308)](_0x1422f7 => _0x1422f7.id === _0x36c3df) || _0x3bcbbb(_0x2c6952[_0x1f782b(243)]), _0x1fb8e1 = _0x560959(_0x599d8b, _0x2c6952, _0xda722a);
        return _0x1fb8e1[_0x1f782b(248)] = _0xda722a, _0x26cb36.finalPending = false, _0x1fb8e1[_0x1f782b(258)] ? (_0x599d8b[_0x1f782b(357)] += 1, _0x1f782b(204) === _0xda722a.id && (_0x599d8b[_0x1f782b(214)][_0x1f782b(191)] = true), _0x26cb36[_0x1f782b(320)] = true, _0x26cb36[_0x1f782b(448)] = 'champion', _0x26cb36[_0x1f782b(551)] = _0x1f782b(438), _0x599d8b.trophies[_0x1f782b(197)] += 1, _0x43e8e6.trophies.push(_0x1f782b(197)), _0x599d8b[_0x1f782b(556)] = _0xe3d09d(_0x599d8b[_0x1f782b(556)] + 8, 0, 100), _0x599d8b[_0x1f782b(347)] = _0xe3d09d(_0x599d8b[_0x1f782b(347)] + 12, 5, 100), _0x599d8b[_0x1f782b(180)] += 2, _0x599d8b[_0x1f782b(415)].push({
            'age': _0x599d8b.age,
            'text': 'Champion du monde ' + _0x599d8b[_0x1f782b(557)] + ' avec ' + _0x599d8b[_0x1f782b(440)][_0x1f782b(274)] + ' !',
            'impact': 40
        }), _0x1ba885(_0x599d8b) >= 85 && _0x5309e8() < 0.55 && (_0x26cb36[_0x1f782b(318)] = true, _0x1648b7(_0x599d8b, _0x43e8e6, _0x1f782b(389))), _0x26cb36.goals >= 5 && _0x1648b7(_0x599d8b, _0x43e8e6, _0x1f782b(377)), _0x43e8e6[_0x1f782b(533)][_0x1f782b(168)]('ballon_won') || _0x33afb6(_0x599d8b, _0x43e8e6, 3 + (_0x26cb36[_0x1f782b(318)] ? 2.5 : 0))) : (_0x26cb36.stage = _0x1f782b(225), _0x26cb36.label = 'Finaliste', _0x599d8b[_0x1f782b(556)] = _0xe3d09d(_0x599d8b[_0x1f782b(556)] + 4, 0, 100), _0x599d8b.moral = _0xe3d09d(_0x599d8b[_0x1f782b(347)] - 8, 5, 100), _0x599d8b[_0x1f782b(415)].push({
            'age': _0x599d8b[_0x1f782b(205)],
            'text': _0x1f782b(292) + _0x599d8b.year + _0x1f782b(394),
            'impact': 10
        })), _0x1fb8e1;
    }
    function _0x377f64(_0x4a81ce) {
        const _0x24d12d = _0x2ae430, _0x2e2649 = BALANCE[_0x24d12d(172)][_0x1d465c(_0x4a81ce, _0x4a81ce[_0x24d12d(270)])];
        let _0x79860 = 0.3 + (_0x1ba885(_0x4a81ce) - _0x2e2649 + 16) / 38 + (_0x4a81ce.coachRel - 55) / 300;
        return _0x4a81ce[_0x24d12d(539)] && (_0x79860 += 0.22), _0x4a81ce.flags[_0x24d12d(519)] && _0x4a81ce[_0x24d12d(205)] <= 20 && (_0x79860 += 0.2), _0xe3d09d(_0x79860, 0.1, 1);
    }
    function _0x39c880(_0x5b4a69) {
        const _0x325bbf = _0x2ae430, _0x5c3cfc = _0x1d465c(_0x5b4a69, _0x5b4a69.club);
        if (_0x5309e8() < 0.5) {
            if ('att' === _0x5b4a69.position.id) {
                const _0x1c6d86 = Math[_0x325bbf(398)](6, Math[_0x325bbf(250)](38 * _0x5b4a69[_0x325bbf(552)][_0x325bbf(264)] * (0.5 + _0x1ba885(_0x5b4a69) / 220)));
                return {
                    'type': _0x325bbf(443),
                    'n': _0x1c6d86,
                    'label': 'Marquer ' + _0x1c6d86 + _0x325bbf(520)
                };
            }
            if ('gk' === _0x5b4a69.position.id) {
                const _0x59c728 = Math[_0x325bbf(398)](6, Math[_0x325bbf(250)](38 * (0.2 + _0x1ba885(_0x5b4a69) / 320)));
                return {
                    'type': 'cs',
                    'n': _0x59c728,
                    'label': _0x59c728 + _0x325bbf(241)
                };
            }
            const _0x3b49ee = _0x325bbf(206) === _0x5c3cfc ? 7 : 'd1' === _0x5c3cfc ? 6.8 : 6.5;
            return {
                'type': _0x325bbf(492),
                'n': _0x3b49ee,
                'label': 'Note de saison \u2265 ' + _0x3b49ee[_0x325bbf(299)](1)
            };
        }
        return 'elite' === _0x5c3cfc ? {
            'type': _0x325bbf(465),
            'label': _0x325bbf(223)
        } : 'd1' === _0x5c3cfc ? {
            'type': _0x325bbf(550),
            'n': 6,
            'label': _0x325bbf(309)
        } : 'd2' === _0x5c3cfc ? {
            'type': 'top',
            'n': 5,
            'label': _0x325bbf(535)
        } : {
            'type': _0x325bbf(550),
            'n': 8,
            'label': 'Viser le haut de tableau (top 8)'
        };
    }
    function _0x28c53c(_0x33127b, _0x4c9679) {
        const _0x110f6b = _0x2ae430;
        return !!_0x33127b && (_0x110f6b(443) === _0x33127b.type ? _0x4c9679[_0x110f6b(443)] >= _0x33127b.n : 'cs' === _0x33127b[_0x110f6b(348)] ? _0x4c9679[_0x110f6b(231)] >= _0x33127b.n : _0x110f6b(492) === _0x33127b.type ? _0x4c9679.rating >= _0x33127b.n : 'trophy' === _0x33127b[_0x110f6b(348)] ? _0x4c9679[_0x110f6b(365)][_0x110f6b(546)] > 0 : _0x110f6b(550) === _0x33127b.type && _0x4c9679[_0x110f6b(362)] <= _0x33127b.n);
    }
    function _0x58e1e4(_0x148db5, _0x2722ca) {
        const _0x413a27 = _0x2ae430;
        let _0x4cac11 = null;
        return _0x2722ca[_0x413a27(339)] >= 12 ? _0x4cac11 = HEADLINES[_0x413a27(186)] : _0x2722ca[_0x413a27(163)] ? _0x4cac11 = HEADLINES[_0x413a27(163)] : _0x2722ca[_0x413a27(365)].length > 0 ? _0x4cac11 = HEADLINES[_0x413a27(465)] : _0x2722ca.rating >= 7.8 ? _0x4cac11 = HEADLINES.wonder : _0x2722ca[_0x413a27(492)] <= 5.3 ? _0x4cac11 = HEADLINES.flop : _0x2722ca[_0x413a27(492)] >= 7 && _0x5309e8() < 0.6 && (_0x4cac11 = HEADLINES[_0x413a27(412)]), _0x4cac11 ? _0x3bcbbb(_0x4cac11)[_0x413a27(337)](/\{name\}/g, _0x148db5[_0x413a27(274)])[_0x413a27(337)](/\{club\}/g, _0x148db5.club[_0x413a27(274)]) : null;
    }
    function _0x1648b7(_0x587a55, _0x4aa9d8, _0x41ff71) {
        const _0x18e55a = _0x2ae430;
        if (_0x4aa9d8[_0x18e55a(533)][_0x18e55a(168)](_0x41ff71)) {
            return;
        }
        const _0x1b1847 = AWARDS[_0x41ff71];
        _0x1b1847 && (_0xa6ab68(_0x587a55, _0x1b1847.fx || {}), _0x4aa9d8[_0x18e55a(533)].push(_0x41ff71), _0x587a55[_0x18e55a(486)][_0x41ff71] = (_0x587a55[_0x18e55a(486)][_0x41ff71] || 0) + 1, [
            _0x18e55a(346),
            'wc_golden_ball',
            _0x18e55a(434)
        ][_0x18e55a(168)](_0x41ff71) && _0x587a55.history[_0x18e55a(262)]({
            'age': _0x587a55[_0x18e55a(205)],
            'text': _0x1b1847.icon + ' ' + _0x1b1847.name + ' ' + _0x587a55.year + '.',
            'impact': 12
        }));
    }
    function _0x23ad48(_0x56d056) {
        return _0x56d056 <= 34 ? 1 : _0x56d056 <= 36 ? 0.35 : _0x56d056 <= 38 ? 0.15 : 0.06;
    }
    function _0x9673d7(_0x2f4f3b, _0x9e2128) {
        const _0x57fae1 = _0x2ae430, _0x29ba96 = _0x1d465c(_0x2f4f3b, _0x2f4f3b[_0x57fae1(270)]), _0x592a8d = 'elite' === _0x29ba96 || 'd1' === _0x29ba96, _0x4ad77b = _0x9e2128[_0x57fae1(492)], _0x1c9ecd = _0x23ad48(_0x2f4f3b[_0x57fae1(205)]);
        _0x592a8d && (_0x4ad77b >= 7.9 && _0x5309e8() < 0.65 * _0x1c9ecd ? _0x1648b7(_0x2f4f3b, _0x9e2128, _0x57fae1(346)) : _0x4ad77b >= 7.5 && _0x2f4f3b[_0x57fae1(205)] <= 21 && _0x5309e8() < 0.6 && _0x1648b7(_0x2f4f3b, _0x9e2128, _0x57fae1(153)), _0x9e2128[_0x57fae1(407)] >= 14 && _0x5309e8() < 0.5 * _0x1c9ecd && _0x1648b7(_0x2f4f3b, _0x9e2128, _0x57fae1(446)), _0x4ad77b >= 7.3 && _0x5309e8() < 0.6 * _0x1c9ecd && _0x1648b7(_0x2f4f3b, _0x9e2128, _0x57fae1(143)), 'gk' === _0x2f4f3b.position.id && _0x9e2128[_0x57fae1(231)] >= 17 && _0x5309e8() < 0.5 * _0x1c9ecd && _0x1648b7(_0x2f4f3b, _0x9e2128, 'golden_glove'), !_0x2f4f3b[_0x57fae1(214)].revelation_won && _0x4ad77b >= 7.4 && _0x2f4f3b.age <= 22 && (_0x2f4f3b[_0x57fae1(214)][_0x57fae1(349)] = true, _0x1648b7(_0x2f4f3b, _0x9e2128, _0x57fae1(454))));
        _0x9e2128[_0x57fae1(365)][_0x57fae1(168)](_0x57fae1(257)) && _0x4ad77b >= 7.5 && _0x5309e8() < 0.5 * _0x1c9ecd && _0x1648b7(_0x2f4f3b, _0x9e2128, _0x57fae1(434));
        !_0x2f4f3b[_0x57fae1(214)][_0x57fae1(493)] && _0x2f4f3b[_0x57fae1(556)] >= 70 && _0x2f4f3b[_0x57fae1(524)][_0x57fae1(173)](_0x420f13 => _0x420f13[_0x57fae1(312)] === _0x2f4f3b[_0x57fae1(270)][_0x57fae1(274)]).length >= 7 && (_0x2f4f3b.flags[_0x57fae1(493)] = true, _0x1648b7(_0x2f4f3b, _0x9e2128, _0x57fae1(141)));
        ;
    }
    function _0x33afb6(_0x456597, _0x33485f, _0x1ecc84) {
        const _0x427373 = _0x2ae430;
        if (_0x33485f.awards[_0x427373(168)](_0x427373(319))) {
            return false;
        }
        const _0x5c8072 = _0x1d465c(_0x456597, _0x456597[_0x427373(270)]);
        if (_0x427373(206) !== _0x5c8072 && 'd1' !== _0x5c8072) {
            return false;
        }
        if ((_0x150a36(_0x456597.club.countryId) || {})[_0x427373(548)]) {
            return false;
        }
        let _0x2a4a4a = 2.2 * (_0x33485f[_0x427373(492)] - 7) + (_0x1ecc84 || 0);
        _0x33485f.trophies.includes(_0x427373(257)) && (_0x2a4a4a += 'eu' === _0x33485f[_0x427373(304)] ? 2.2 : 0.8);
        _0x33485f[_0x427373(365)][_0x427373(168)]('worldCup') && !_0x1ecc84 && (_0x2a4a4a += 3);
        _0x33485f[_0x427373(365)][_0x427373(168)]('league') && (_0x2a4a4a += 1.2);
        _0x33485f[_0x427373(365)][_0x427373(168)](_0x427373(203)) && (_0x2a4a4a += 0.4);
        _0x33485f[_0x427373(365)].includes(_0x427373(367)) && (_0x2a4a4a += 1.5);
        ;
        for (const _0x29523f of _0x33485f[_0x427373(533)])
            _0x2a4a4a += AWARDS[_0x29523f] && AWARDS[_0x29523f][_0x427373(430)] || 0;
        if (_0x456597.rep >= 85 ? _0x2a4a4a += 0.8 : _0x456597[_0x427373(556)] >= 75 && (_0x2a4a4a += 0.4), _0x427373(206) === _0x5c8072 && (_0x2a4a4a += 0.6), _0x16b0ff(_0x456597, _0x427373(408)) && (_0x2a4a4a += 0.3), _0x1ba885(_0x456597) >= BALANCE.ballonMinOvr && _0x456597[_0x427373(556)] >= BALANCE[_0x427373(485)] && _0x33485f[_0x427373(492)] >= 7.2) {
            const _0x2d745f = _0x456597[_0x427373(365)][_0x427373(417)], _0x4b77d1 = 0 === _0x2d745f ? 1 : _0x2d745f <= 2 ? BALANCE[_0x427373(345)] : BALANCE[_0x427373(240)], _0x36de03 = _0xe3d09d((_0x2a4a4a - BALANCE.ballonPtsFloor) * BALANCE.ballonSlope, 0, BALANCE.ballonCap) * _0x456597[_0x427373(440)][_0x427373(490)] * _0x4b77d1 * _0x23ad48(_0x456597[_0x427373(205)]);
            if (_0x5309e8() < _0x36de03) {
                return _0x456597[_0x427373(365)][_0x427373(417)] += 1, _0x33485f.trophies[_0x427373(262)](_0x427373(417)), _0x33485f.awards.push(_0x427373(319)), _0x33485f[_0x427373(482)] = 1, _0x456597[_0x427373(306)] = 1, _0x456597[_0x427373(556)] = _0xe3d09d(_0x456597[_0x427373(556)] + 8, 0, 100), _0x456597[_0x427373(180)] += 1.5, _0x456597[_0x427373(415)].push({
                    'age': _0x456597[_0x427373(205)],
                    'text': 'Ballon d\'Or ' + _0x456597[_0x427373(557)] + _0x427373(404),
                    'impact': 30
                }), _0x456597[_0x427373(205)] <= 23 && (_0x456597[_0x427373(214)][_0x427373(235)] = true), true;
            }
        }
        if (_0x33485f[_0x427373(492)] >= 7 && _0x1ba885(_0x456597) >= 78 && _0x456597.rep >= 55 && _0x2a4a4a >= 2.2 && _0x5309e8() < _0x23ad48(_0x456597[_0x427373(205)])) {
            let _0x2da320, _0x193655 = _0x2a4a4a;
            (_0x427373(529) === _0x456597.position.id || 'gk' === _0x456597.position.id) && _0x33485f.rating < 8 && (_0x193655 -= 1.2);
            'd1' === _0x5c8072 && (_0x193655 -= 0.8);
            _0x2da320 = _0x193655 >= 8 ? _0x704bac(2, 3) : _0x193655 >= 6.5 ? _0x704bac(2, 5) : _0x193655 >= 5 ? _0x704bac(4, 10) : _0x193655 >= 3.5 ? _0x704bac(8, 20) : _0x704bac(15, 30);
            _0x33485f.ballonRank = _0x2da320;
            (!_0x456597.bestBallonRank || _0x2da320 < _0x456597[_0x427373(306)]) && (_0x456597[_0x427373(306)] = _0x2da320);
            _0x2da320 <= 10 && (_0x456597[_0x427373(556)] = _0xe3d09d(_0x456597[_0x427373(556)] + 2, 0, 100));
            _0x2da320 <= 3 && _0x456597[_0x427373(415)][_0x427373(262)]({
                'age': _0x456597[_0x427373(205)],
                'text': _0x427373(456) + _0x456597[_0x427373(557)] + ' (' + _0x2da320 + 'ᵉ).',
                'impact': 12
            });
            ;
        }
        return false;
    }
    function _0x4cb725(_0x53ff9b) {
        const _0x14c5c0 = _0x2ae430, _0x4ab5b3 = _0x1d465c(_0x53ff9b, _0x53ff9b[_0x14c5c0(270)]), _0x1e0c31 = {
                'age': _0x53ff9b[_0x14c5c0(205)],
                'year': _0x53ff9b.year,
                'clubName': _0x53ff9b[_0x14c5c0(270)][_0x14c5c0(274)],
                'level': _0x4ab5b3,
                'trophies': [],
                'awards': [],
                'lines': [],
                'pendingMoments': [],
                'onLoan': !!_0x53ff9b[_0x14c5c0(539)]
            };
        if (_0x53ff9b.objective = _0x39c880(_0x53ff9b), _0x1e0c31[_0x14c5c0(528)] = _0x53ff9b[_0x14c5c0(499)].label, _0x5309e8() < BALANCE.microChance) {
            const _0x3e5d38 = MICRO_EVENTS[_0x14c5c0(173)](_0x3334f7 => _0x53ff9b[_0x14c5c0(205)] >= _0x3334f7[_0x14c5c0(182)] && _0x53ff9b.age <= _0x3334f7[_0x14c5c0(387)] && (!_0x3334f7[_0x14c5c0(368)] || _0x3334f7.pos[_0x14c5c0(168)](_0x53ff9b[_0x14c5c0(552)].id)));
            if (_0x3e5d38.length) {
                const _0x15bc36 = _0x39f973(_0x3e5d38, _0x5508a9 => _0x5508a9.w);
                _0xa6ab68(_0x53ff9b, _0x15bc36.fx || {});
                _0x1e0c31.lines[_0x14c5c0(262)]({
                    'text': _0x15bc36[_0x14c5c0(169)],
                    'impact': _0x1f3856(_0x15bc36.fx)
                });
                Math[_0x14c5c0(193)](_0x1f3856(_0x15bc36.fx)) >= 8 && _0x53ff9b.history.push({
                    'age': _0x53ff9b[_0x14c5c0(205)],
                    'text': _0x15bc36[_0x14c5c0(169)],
                    'impact': _0x1f3856(_0x15bc36.fx)
                });
                ;
            }
        }
        _0x53ff9b.discipline < 40 && _0x5309e8() < 0.35 ? (_0x53ff9b[_0x14c5c0(313)] = _0xe3d09d(_0x53ff9b[_0x14c5c0(313)] - 4, 5, 100), _0x53ff9b.injuryWeeks += 2, _0x1e0c31[_0x14c5c0(437)].push({
            'text': _0x14c5c0(372),
            'impact': -5
        })) : _0x53ff9b.discipline >= 72 && (_0x53ff9b[_0x14c5c0(313)] = _0xe3d09d(_0x53ff9b[_0x14c5c0(313)] + 2, 5, 100));
        _0x14c5c0(242) === _0x53ff9b.trajectory.id && _0x5309e8() < 0.4 && (_0x53ff9b[_0x14c5c0(313)] = _0xe3d09d(_0x53ff9b[_0x14c5c0(313)] - _0x704bac(2, 8), 5, 100), _0x53ff9b[_0x14c5c0(347)] = _0xe3d09d(_0x53ff9b.moral - _0x704bac(0, 6), 5, 100));
        ;
        const _0x212aaa = _0x377f64(_0x53ff9b);
        _0x1e0c31.pt = _0x212aaa;
        const [_0x4a30b8, _0x20b08f] = BALANCE[_0x14c5c0(216)][_0x4ab5b3], _0x53f51d = _0xe3d09d(1 - _0x53ff9b[_0x14c5c0(339)] / 42, 0.05, 1), _0x1980f5 = Math[_0x14c5c0(250)](_0x4faedf(_0x4a30b8, _0x20b08f) * _0x212aaa * _0x53f51d * ((_0x1a1f5d = _0x53ff9b[_0x14c5c0(205)]) <= 18 ? 0.8 : _0x1a1f5d <= 20 ? 0.88 : _0x1a1f5d <= 22 ? 0.94 : _0x1a1f5d <= 32 ? 0.97 : _0x1a1f5d <= 34 ? 0.78 : _0x1a1f5d <= 36 ? 0.62 : 0.48));
        var _0x1a1f5d;
        _0x1e0c31.matches = _0x1980f5;
        _0x1e0c31[_0x14c5c0(339)] = _0x53ff9b[_0x14c5c0(339)];
        ;
        const _0x5eadf9 = _0x53ff9b.archetype ? _0x53ff9b.archetype[_0x14c5c0(458)] : {}, _0x3d5b2c = (0.32 + _0x53ff9b[_0x14c5c0(507)].t / 160 + (_0x53ff9b[_0x14c5c0(313)] - 60) / 400 + (_0x53ff9b[_0x14c5c0(347)] - 60) / 600) * function (_0x51c847) {
                return _0x51c847 <= 32 ? 1 : _0x51c847 <= 34 ? 0.92 : _0x51c847 <= 36 ? 0.84 : 0.75;
            }(_0x53ff9b[_0x14c5c0(205)]), _0x20d73a = _0x1980f5 * _0x53ff9b[_0x14c5c0(552)][_0x14c5c0(264)] * (_0x5eadf9.goals || 1) * 0.9, _0x3faaf5 = _0x1980f5 * _0x53ff9b[_0x14c5c0(552)][_0x14c5c0(300)] * (_0x5eadf9[_0x14c5c0(407)] || 1) * 0.9;
        _0x1e0c31[_0x14c5c0(443)] = Math[_0x14c5c0(398)](0, Math.round(_0x1980f5 * _0x53ff9b.position[_0x14c5c0(264)] * _0x3d5b2c * (_0x5eadf9[_0x14c5c0(443)] || 1) * _0x4faedf(0.75, 1.3)));
        _0x1e0c31[_0x14c5c0(407)] = Math.max(0, Math.round(_0x1980f5 * _0x53ff9b[_0x14c5c0(552)][_0x14c5c0(300)] * _0x3d5b2c * (_0x5eadf9[_0x14c5c0(407)] || 1) * _0x4faedf(0.7, 1.3)));
        _0x1e0c31.cleanSheets = 'gk' === _0x53ff9b[_0x14c5c0(552)].id ? Math[_0x14c5c0(398)](0, Math[_0x14c5c0(250)](_0x1980f5 * (0.18 + _0x1ba885(_0x53ff9b) / 280) * (_0x5eadf9.cs || 1) * _0x4faedf(0.8, 1.2))) : 0;
        ;
        let _0x4caa0f = 5.4 + (_0x1ba885(_0x53ff9b) - 62) / 14 + (_0x53ff9b.form - 60) / 90 + 0.8 * (_0x212aaa - 0.7) + (_0x5eadf9[_0x14c5c0(492)] || 0);
        if (_0x4caa0f += _0xe3d09d(0.05 * (_0x1e0c31[_0x14c5c0(443)] - _0x20d73a) + 0.08 * (_0x1e0c31[_0x14c5c0(407)] - _0x3faaf5) + (0.11 * Math[_0x14c5c0(398)](0, _0x1e0c31.assists - 18) + 0.06 * Math[_0x14c5c0(398)](0, _0x1e0c31[_0x14c5c0(443)] - 24)), -1, 3.5), 'gk' === _0x53ff9b.position.id) {
            const _0x40eb24 = _0x1980f5 * (0.18 + _0x1ba885(_0x53ff9b) / 280) * (_0x5eadf9.cs || 1) * 0.9;
            _0x4caa0f += _0xe3d09d(0.05 * (_0x1e0c31[_0x14c5c0(231)] - _0x40eb24), -0.6, 1.4);
        }
        _0x4caa0f = _0xe3d09d(_0x4caa0f + _0x4faedf(-0.35, 0.45), 3.5, 9.9);
        _0x1e0c31[_0x14c5c0(492)] = Math[_0x14c5c0(250)](10 * _0x4caa0f) / 10;
        ;
        const _0x5aef33 = _0x14c5c0(206) === _0x4ab5b3 || 'd1' === _0x4ab5b3, _0x522655 = 1 + 0.12 * (_0x4caa0f - 6.6), _0xbb9801 = _0x53ff9b[_0x14c5c0(190)][_0x14c5c0(405)](0);
        for (const _0x21952a of _0xbb9801) {
            if (_0x14c5c0(401) === _0x21952a && (_0x53ff9b[_0x14c5c0(365)].league += 1), _0x14c5c0(203) === _0x21952a && (_0x53ff9b[_0x14c5c0(365)][_0x14c5c0(203)] += 1), _0x14c5c0(257) === _0x21952a) {
                _0x53ff9b[_0x14c5c0(365)][_0x14c5c0(257)] += 1;
                const _0x11f626 = (_0x150a36(_0x53ff9b.club[_0x14c5c0(275)]) || {}).continent || 'eu';
                _0x1e0c31[_0x14c5c0(304)] = _0x11f626;
                _0x53ff9b[_0x14c5c0(467)][_0x14c5c0(262)]({
                    'continent': _0x11f626,
                    'year': _0x53ff9b[_0x14c5c0(557)]
                });
                ;
            }
            _0x14c5c0(367) === _0x21952a && (_0x53ff9b[_0x14c5c0(365)][_0x14c5c0(367)] += 1);
            _0x14c5c0(197) !== _0x21952a && _0x1e0c31.trophies[_0x14c5c0(262)](_0x21952a);
            ;
        }
        _0xbb9801.includes('league') && _0x53ff9b.leagueTitlesDetail[_0x14c5c0(262)]({
            'countryId': _0x53ff9b[_0x14c5c0(270)][_0x14c5c0(275)],
            'level': _0x4ab5b3,
            'clubId': _0x53ff9b[_0x14c5c0(270)].id,
            'year': _0x53ff9b[_0x14c5c0(557)]
        });
        const _0x108eb1 = !_0xbb9801[_0x14c5c0(168)](_0x14c5c0(401)) && _0x5309e8() < BALANCE[_0x14c5c0(419)][_0x4ab5b3] * _0x522655;
        _0x108eb1 && _0x5aef33 ? (_0x53ff9b[_0x14c5c0(365)].league += 1, _0x1e0c31[_0x14c5c0(365)].push(_0x14c5c0(401)), _0x53ff9b[_0x14c5c0(328)][_0x14c5c0(262)]({
            'countryId': _0x53ff9b[_0x14c5c0(270)].countryId,
            'level': _0x4ab5b3,
            'clubId': _0x53ff9b[_0x14c5c0(270)].id,
            'year': _0x53ff9b[_0x14c5c0(557)]
        })) : _0x108eb1 ? (_0x1e0c31.divisionTitle = true, _0x1e0c31[_0x14c5c0(360)] = true, _0x53ff9b.leagueTitlesDetail.push({
            'countryId': _0x53ff9b[_0x14c5c0(270)][_0x14c5c0(275)],
            'level': _0x4ab5b3,
            'clubId': _0x53ff9b.club.id,
            'year': _0x53ff9b[_0x14c5c0(557)]
        }), _0x53ff9b[_0x14c5c0(556)] = _0xe3d09d(_0x53ff9b[_0x14c5c0(556)] + Math.round(4 * _0x3ab06f(_0x53ff9b)), 0, 100), _0x53ff9b[_0x14c5c0(347)] = _0xe3d09d(_0x53ff9b[_0x14c5c0(347)] + 6, 5, 100), _0x53ff9b[_0x14c5c0(415)].push({
            'age': _0x53ff9b[_0x14c5c0(205)],
            'text': _0x14c5c0(183) + LEVELS[_0x4ab5b3][_0x14c5c0(244)] + ' ' + _0x53ff9b[_0x14c5c0(557)] + ' avec ' + _0x53ff9b[_0x14c5c0(270)].name + _0x14c5c0(527),
            'impact': 9
        })) : !_0x5aef33 && _0x4caa0f >= 6.4 && _0x5309e8() < (BALANCE[_0x14c5c0(305)][_0x4ab5b3] || 0) * _0x522655 && (_0x1e0c31[_0x14c5c0(283)] = true, _0x1e0c31[_0x14c5c0(268)][_0x14c5c0(262)]({
            'type': _0x14c5c0(371),
            'label': _0x14c5c0(351),
            'winLabel': 'MONTÉE !',
            'failLabel': 'Échec en barrage',
            'moment': _0x41c855(_0x53ff9b, _0x14c5c0(221))
        }));
        let _0x412ce0 = BALANCE[_0x14c5c0(501)][_0x4ab5b3] || 0;
        _0x412ce0 && 'd1' === _0x4ab5b3 && _0x14c5c0(206) === _0x53ff9b[_0x14c5c0(270)][_0x14c5c0(396)] && (_0x412ce0 *= BALANCE[_0x14c5c0(352)]);
        !_0x1e0c31.promoted && !_0x1e0c31[_0x14c5c0(283)] && _0x412ce0 > 0 && _0x5309e8() < _0x412ce0 * _0xe3d09d(1 - 0.35 * (_0x4caa0f - 6.3), 0.2, 1.6) && (_0x1e0c31[_0x14c5c0(210)] = true, _0x53ff9b.moral = _0xe3d09d(_0x53ff9b[_0x14c5c0(347)] - 8, 5, 100), _0x53ff9b[_0x14c5c0(415)][_0x14c5c0(262)]({
            'age': _0x53ff9b.age,
            'text': _0x14c5c0(323) + _0x53ff9b[_0x14c5c0(270)].name + _0x14c5c0(207) + _0x53ff9b[_0x14c5c0(557)] + _0x14c5c0(146),
            'impact': -10
        }));
        !_0xbb9801[_0x14c5c0(168)]('cup') && _0x5309e8() < BALANCE.cupChance[_0x4ab5b3] * BALANCE[_0x14c5c0(276)] * _0x522655 && _0x1e0c31[_0x14c5c0(268)][_0x14c5c0(262)]({
            'type': 'cup_final',
            'label': _0x14c5c0(230),
            'winLabel': _0x14c5c0(432),
            'failLabel': _0x14c5c0(543),
            'moment': _0x41c855(_0x53ff9b, _0x14c5c0(463))
        });
        ;
        const _0x305be9 = (_0x150a36(_0x53ff9b[_0x14c5c0(270)][_0x14c5c0(275)]) || {})[_0x14c5c0(286)] || 1;
        if (!_0xbb9801.includes(_0x14c5c0(257)) && _0x5309e8() < BALANCE[_0x14c5c0(525)][_0x4ab5b3] * _0x522655 * _0x305be9) {
            _0x53ff9b[_0x14c5c0(365)].continental += 1;
            _0x1e0c31[_0x14c5c0(365)].push(_0x14c5c0(257));
            ;
            const _0x48cbf2 = (_0x150a36(_0x53ff9b[_0x14c5c0(270)][_0x14c5c0(275)]) || {})[_0x14c5c0(531)] || 'eu', _0x216f8e = CONTINENTAL_CUPS[_0x48cbf2] || CONTINENTAL_CUPS.eu;
            _0x1e0c31[_0x14c5c0(304)] = _0x48cbf2;
            _0x53ff9b[_0x14c5c0(467)][_0x14c5c0(262)]({
                'continent': _0x48cbf2,
                'year': _0x53ff9b.year
            });
            _0x53ff9b[_0x14c5c0(415)][_0x14c5c0(262)]({
                'age': _0x53ff9b[_0x14c5c0(205)],
                'text': 'Vainqueur de la ' + _0x216f8e.name + ' avec ' + _0x53ff9b.club.name + '.',
                'impact': 'eu' === _0x48cbf2 ? 15 : 9
            });
            ;
        }
        _0x1e0c31[_0x14c5c0(365)].includes(_0x14c5c0(401)) || _0x1e0c31[_0x14c5c0(340)] ? _0x1e0c31[_0x14c5c0(362)] = 1 : _0x1e0c31.playoffRun ? _0x1e0c31[_0x14c5c0(362)] = _0x704bac(2, 4) : _0x1e0c31[_0x14c5c0(210)] ? _0x1e0c31[_0x14c5c0(362)] = 'd1' === _0x4ab5b3 ? _0x704bac(16, 18) : _0x704bac(17, 19) : _0x1e0c31[_0x14c5c0(362)] = _0x14c5c0(206) === _0x4ab5b3 ? _0x704bac(2, 7) : 'd1' === _0x4ab5b3 ? _0x704bac(2, 12) : _0x704bac(4, 14);
        const _0x16d168 = _0x53ff9b.justTransferred && _0x53ff9b.prevClub && (_0x53ff9b[_0x14c5c0(159)][_0x14c5c0(275)] === _0x53ff9b[_0x14c5c0(270)].countryId || _0x53ff9b[_0x14c5c0(214)][_0x14c5c0(364)]) && !_0x53ff9b.scheduled[_0x14c5c0(444)](_0x4fdee4 => _0x14c5c0(151) === _0x4fdee4.id);
        _0x1e0c31[_0x14c5c0(268)][_0x14c5c0(546)] < 2 && _0x1980f5 > 8 && (_0x16d168 && _0x5309e8() < BALANCE[_0x14c5c0(201)] ? _0x1e0c31[_0x14c5c0(268)][_0x14c5c0(262)]({
            'type': _0x14c5c0(184),
            'label': _0x14c5c0(476),
            'winLabel': _0x14c5c0(271),
            'failLabel': _0x14c5c0(436),
            'moment': _0x41c855(_0x53ff9b, _0x14c5c0(184))
        }) : _0x5309e8() < BALANCE[_0x14c5c0(361)] && _0x1e0c31.pendingMoments[_0x14c5c0(262)]({
            'type': _0x14c5c0(226),
            'label': _0x14c5c0(307),
            'winLabel': _0x14c5c0(297),
            'failLabel': _0x14c5c0(431),
            'moment': _0x41c855(_0x53ff9b, _0x14c5c0(226))
        }));
        _0x53ff9b[_0x14c5c0(422)] = false;
        _0x1e0c31.goals >= BALANCE[_0x14c5c0(442)][_0x4ab5b3] && _0x5309e8() < BALANCE.topScorerChance && _0x1648b7(_0x53ff9b, _0x1e0c31, _0x14c5c0(502));
        ;
        const _0x5a7aad = 'eu' === (_0x150a36(_0x53ff9b.club[_0x14c5c0(275)]) || {}).continent && BALANCE.goldenShoeCoef[_0x4ab5b3] || 0;
        if (_0x5a7aad && _0x1e0c31[_0x14c5c0(443)] * _0x5a7aad >= BALANCE[_0x14c5c0(287)] && !_0xbb9801[_0x14c5c0(168)]('goldenBoot') && _0x5309e8() < BALANCE[_0x14c5c0(167)] && (_0x53ff9b.trophies.goldenBoot += 1, _0x1e0c31[_0x14c5c0(365)].push('goldenBoot'), _0x53ff9b[_0x14c5c0(415)][_0x14c5c0(262)]({
                'age': _0x53ff9b[_0x14c5c0(205)],
                'text': 'Soulier d\'Or européen ' + _0x53ff9b[_0x14c5c0(557)] + _0x14c5c0(290),
                'impact': 12
            })), !_0x53ff9b[_0x14c5c0(488)].active && !_0x53ff9b[_0x14c5c0(488)][_0x14c5c0(187)] && !_0x53ff9b[_0x14c5c0(214)][_0x14c5c0(279)] && _0x53ff9b.age >= 17 && _0x53ff9b.age <= 20 && _0x1ba885(_0x53ff9b) >= 71 && _0x53ff9b[_0x14c5c0(556)] >= 35 && (_0x53ff9b[_0x14c5c0(214)].youth_int = true, _0x53ff9b.rep = _0xe3d09d(_0x53ff9b[_0x14c5c0(556)] + 2, 0, 100), _0x1e0c31[_0x14c5c0(437)][_0x14c5c0(262)]({
                'text': _0x14c5c0(534) + _0x53ff9b[_0x14c5c0(440)][_0x14c5c0(274)] + ' \u2014 l\'antichambre des A.',
                'impact': 5
            }), _0x53ff9b[_0x14c5c0(415)][_0x14c5c0(262)]({
                'age': _0x53ff9b[_0x14c5c0(205)],
                'text': _0x14c5c0(383) + _0x53ff9b[_0x14c5c0(440)][_0x14c5c0(274)] + '.',
                'impact': 5
            })), _0xaae09(_0x53ff9b) && !_0x53ff9b[_0x14c5c0(195)] && (_0x53ff9b[_0x14c5c0(488)][_0x14c5c0(164)] = true, _0x53ff9b.natTeam[_0x14c5c0(187)] = false), _0x53ff9b.natTeam.active) {
            const _0xbfc6cb = _0x704bac(4, 9);
            _0x53ff9b[_0x14c5c0(488)][_0x14c5c0(160)] += _0xbfc6cb;
            const _0x4bd831 = Math[_0x14c5c0(250)](_0xbfc6cb * _0x53ff9b[_0x14c5c0(552)][_0x14c5c0(264)] * _0x3d5b2c * _0x4faedf(0.5, 1.2));
            _0x53ff9b[_0x14c5c0(488)][_0x14c5c0(443)] += _0x4bd831;
            _0x1e0c31.caps = _0xbfc6cb;
            _0x5e0923(_0x53ff9b[_0x14c5c0(557)]) && (_0x1e0c31.wc = _0x4e27f8(_0x53ff9b));
            ;
        }
        if (_0x53ff9b.seasonAwards) {
            for (const _0x3e2b45 of _0x53ff9b[_0x14c5c0(178)].splice(0))
                _0x1648b7(_0x53ff9b, _0x1e0c31, _0x3e2b45);
        }
        _0x9673d7(_0x53ff9b, _0x1e0c31);
        _0x33afb6(_0x53ff9b, _0x1e0c31, 0);
        ;
        const _0x5a664f = _0x28c53c(_0x53ff9b[_0x14c5c0(499)], _0x1e0c31);
        if (_0x1e0c31[_0x14c5c0(369)] = _0x5a664f, _0x5a664f) {
            _0x53ff9b.coachRel = _0xe3d09d(_0x53ff9b[_0x14c5c0(453)] + 6, 5, 100);
            _0x53ff9b.rep = _0xe3d09d(_0x53ff9b[_0x14c5c0(556)] + 2, 0, 100);
            ;
            const _0x34c73f = 0.12 * _0x53ff9b[_0x14c5c0(363)][_0x14c5c0(395)];
            _0x53ff9b[_0x14c5c0(180)] += _0x34c73f;
            _0x1e0c31[_0x14c5c0(222)] = _0x34c73f;
            ;
        } else {
            _0x53ff9b[_0x14c5c0(453)] = _0xe3d09d(_0x53ff9b[_0x14c5c0(453)] - 5, 5, 100);
            _0x53ff9b.moral = _0xe3d09d(_0x53ff9b[_0x14c5c0(347)] - 3, 5, 100);
            ;
        }
        const _0x39d988 = _0x53ff9b.rep / 100 * (_0x53ff9b[_0x14c5c0(507)].c / 100) * _0x3ab06f(_0x53ff9b) * 1.8, _0x5b6915 = 0.55 * _0x53ff9b[_0x14c5c0(363)].salary + _0x39d988 * _0x4faedf(0.6, 1.2);
        _0x53ff9b.money += _0x5b6915;
        _0x1e0c31.income = _0x5b6915 + (_0x1e0c31.objectiveBonus || 0);
        ;
        const _0x56bb11 = 0.3 * _0x1e0c31.trophies[_0x14c5c0(546)];
        return _0x56bb11 && (_0x53ff9b.money += _0x56bb11), _0x1e0c31[_0x14c5c0(365)][_0x14c5c0(168)](_0x14c5c0(401)) && _0x53ff9b[_0x14c5c0(415)].push({
            'age': _0x53ff9b[_0x14c5c0(205)],
            'text': _0x14c5c0(554) + _0x53ff9b.year + _0x14c5c0(484) + _0x53ff9b.club[_0x14c5c0(274)] + '.',
            'impact': 10
        }), _0x53ff9b[_0x14c5c0(511)][_0x14c5c0(152)] += _0x1980f5, _0x53ff9b[_0x14c5c0(511)].goals += _0x1e0c31[_0x14c5c0(443)], _0x53ff9b.totals[_0x14c5c0(407)] += _0x1e0c31.assists, _0x53ff9b[_0x14c5c0(511)].cleanSheets += _0x1e0c31[_0x14c5c0(231)], _0x53ff9b.peakOvr = Math[_0x14c5c0(398)](_0x53ff9b.peakOvr, _0x1ba885(_0x53ff9b)), _0x53ff9b[_0x14c5c0(524)][_0x14c5c0(262)]({
            'age': _0x53ff9b.age,
            'year': _0x53ff9b[_0x14c5c0(557)],
            'clubName': _0x53ff9b[_0x14c5c0(270)][_0x14c5c0(274)],
            'level': _0x4ab5b3,
            'matches': _0x1980f5,
            'goals': _0x1e0c31.goals,
            'assists': _0x1e0c31[_0x14c5c0(407)],
            'cleanSheets': _0x1e0c31[_0x14c5c0(231)],
            'rating': _0x1e0c31[_0x14c5c0(492)],
            'trophies': _0x1e0c31.trophies,
            'onLoan': !!_0x53ff9b.loan,
            'leaguePos': _0x1e0c31[_0x14c5c0(362)]
        }), _0x4caa0f >= 7.4 ? _0x53ff9b[_0x14c5c0(453)] = _0xe3d09d(_0x53ff9b[_0x14c5c0(453)] + 4, 5, 100) : _0x4caa0f <= 5.5 && (_0x53ff9b.coachRel = _0xe3d09d(_0x53ff9b.coachRel - 5, 5, 100)), _0x53ff9b[_0x14c5c0(188)] >= 70 ? _0x53ff9b.moral = _0xe3d09d(_0x53ff9b.moral + 2, 5, 100) : _0x53ff9b[_0x14c5c0(188)] <= 35 && (_0x53ff9b[_0x14c5c0(347)] = _0xe3d09d(_0x53ff9b.moral - 3, 5, 100)), _0x212aaa < 0.45 ? (_0x53ff9b[_0x14c5c0(347)] = _0xe3d09d(_0x53ff9b.moral - 8, 5, 100), _0x1e0c31[_0x14c5c0(163)] = true) : _0x212aaa > 0.85 && (_0x53ff9b[_0x14c5c0(347)] = _0xe3d09d(_0x53ff9b[_0x14c5c0(347)] + 3, 5, 100)), _0x53ff9b[_0x14c5c0(539)] && (_0x53ff9b[_0x14c5c0(539)].rating = _0x1e0c31[_0x14c5c0(492)]), _0x53ff9b[_0x14c5c0(150)] = {
            'clubId': _0x53ff9b.club.id,
            'leaguePos': _0x1e0c31[_0x14c5c0(362)],
            'promoted': !!_0x1e0c31.promoted,
            'relegated': !!_0x1e0c31.relegated,
            'rating': _0x1e0c31.rating
        }, _0x1e0c31.headline = _0x58e1e4(_0x53ff9b, _0x1e0c31), _0x1e0c31;
    }
    function _0x3c6118(_0x2ee10f, _0x24b7e2, _0x35bda3, _0x54fcd7) {
        const _0x55f2cb = _0x2ae430, _0x1317da = _0x35bda3[_0x55f2cb(249)], _0x191a75 = _0x1317da[_0x55f2cb(243)].find(_0xc4473 => _0xc4473.id === _0x54fcd7) || _0x3bcbbb(_0x1317da[_0x55f2cb(243)]), _0x3b7903 = _0x560959(_0x2ee10f, _0x1317da, _0x191a75);
        return _0x3b7903[_0x55f2cb(248)] = _0x191a75, _0x3b7903[_0x55f2cb(258)] && (_0x2ee10f[_0x55f2cb(357)] += 1, _0x55f2cb(226) === _0x35bda3[_0x55f2cb(348)] && (_0x2ee10f[_0x55f2cb(278)] += 1), _0x55f2cb(204) === _0x191a75.id && _0x55f2cb(463) === _0x35bda3[_0x55f2cb(348)] && (_0x2ee10f[_0x55f2cb(214)].panenka_final = true)), _0x55f2cb(371) === _0x35bda3[_0x55f2cb(348)] ? _0x3b7903[_0x55f2cb(258)] ? (_0x24b7e2[_0x55f2cb(360)] = true, _0x2ee10f[_0x55f2cb(150)] && (_0x2ee10f[_0x55f2cb(150)][_0x55f2cb(360)] = true), _0x2ee10f[_0x55f2cb(347)] = _0xe3d09d(_0x2ee10f.moral + 10, 5, 100), _0x2ee10f[_0x55f2cb(556)] = _0xe3d09d(_0x2ee10f[_0x55f2cb(556)] + 4, 0, 100), _0x2ee10f.history.push({
            'age': _0x2ee10f[_0x55f2cb(205)],
            'text': _0x55f2cb(375) + _0x2ee10f[_0x55f2cb(270)].name + ' (' + _0x2ee10f[_0x55f2cb(557)] + _0x55f2cb(189),
            'impact': 12
        })) : (_0x2ee10f[_0x55f2cb(347)] = _0xe3d09d(_0x2ee10f[_0x55f2cb(347)] - 6, 5, 100), _0x2ee10f[_0x55f2cb(415)].push({
            'age': _0x2ee10f.age,
            'text': _0x55f2cb(200) + _0x2ee10f[_0x55f2cb(270)][_0x55f2cb(274)] + ' (' + _0x2ee10f[_0x55f2cb(557)] + ').',
            'impact': -6
        })) : _0x55f2cb(463) === _0x35bda3[_0x55f2cb(348)] ? _0x3b7903[_0x55f2cb(258)] ? (_0x2ee10f.trophies[_0x55f2cb(203)] += 1, _0x24b7e2[_0x55f2cb(365)].push(_0x55f2cb(203)), _0x2ee10f.money += 0.3, _0x2ee10f[_0x55f2cb(347)] = _0xe3d09d(_0x2ee10f[_0x55f2cb(347)] + 8, 5, 100), _0x2ee10f.history.push({
            'age': _0x2ee10f[_0x55f2cb(205)],
            'text': 'Vainqueur de la ' + COMPETITIONS[_0x55f2cb(203)].name + ' ' + _0x2ee10f.year + ' avec ' + _0x2ee10f[_0x55f2cb(270)][_0x55f2cb(274)] + '.',
            'impact': 9
        })) : (_0x2ee10f[_0x55f2cb(347)] = _0xe3d09d(_0x2ee10f[_0x55f2cb(347)] - 5, 5, 100), _0x2ee10f[_0x55f2cb(415)].push({
            'age': _0x2ee10f[_0x55f2cb(205)],
            'text': 'Finale de ' + COMPETITIONS[_0x55f2cb(203)][_0x55f2cb(274)] + ' perdue en ' + _0x2ee10f[_0x55f2cb(557)] + '.',
            'impact': -4
        })) : _0x55f2cb(226) === _0x35bda3[_0x55f2cb(348)] ? _0x3b7903.success ? (_0x2ee10f[_0x55f2cb(347)] = _0xe3d09d(_0x2ee10f[_0x55f2cb(347)] + 6, 5, 100), _0x2ee10f[_0x55f2cb(188)] = _0xe3d09d(_0x2ee10f[_0x55f2cb(188)] + 4, 5, 100)) : _0x2ee10f[_0x55f2cb(347)] = _0xe3d09d(_0x2ee10f[_0x55f2cb(347)] - 5, 5, 100) : 'old_club' === _0x35bda3[_0x55f2cb(348)] && (_0x2ee10f[_0x55f2cb(347)] = _0xe3d09d(_0x2ee10f[_0x55f2cb(347)] + (_0x3b7903.success ? 5 : -4), 5, 100)), _0x3b7903;
    }
    function _0x3ee1e8(_0x5a265a) {
        const _0x2e64ac = _0x2ae430, _0x148101 = _0x377f64(_0x5a265a), _0x158194 = BALANCE[_0x2e64ac(517)][_0x1d465c(_0x5a265a, _0x5a265a.club)], _0x481496 = _0x5a265a.potCap - _0x1ba885(_0x5a265a);
        let _0x8ce0f = _0x481496 <= 0 ? 0.15 : _0x481496 <= 4 ? 0.45 : 1;
        _0x5a265a[_0x2e64ac(214)].prodigy && _0x5a265a.age <= 20 && (_0x8ce0f = Math.max(_0x8ce0f, 0.85));
        const _0x542b48 = (_0x150a36(_0x5a265a[_0x2e64ac(270)][_0x2e64ac(275)]) || {}).growthMult || 1, _0x5c0e4d = (_0x5a265a.flags.lateBloomer ? 1.15 : 1) * _0x158194 * _0x8ce0f * function (_0x4d038d) {
                const _0x4cf3d6 = _0x2e64ac, _0x51ef64 = _0x4d038d[_0x4cf3d6(205)];
                switch (_0x4d038d[_0x4cf3d6(468)].id) {
                case 'steady':
                    return _0x51ef64 <= 25 ? 0.8 : 1.1;
                case _0x4cf3d6(355):
                    return _0x51ef64 <= 21 ? 1.8 : _0x51ef64 <= 25 ? 0.8 : 0.6;
                case _0x4cf3d6(336):
                    return _0x51ef64 <= 22 ? 0.7 : _0x51ef64 <= 29 ? 1.7 : 1;
                case _0x4cf3d6(411):
                    return _0x4faedf(0.4, 1.7);
                case _0x4cf3d6(242):
                    return 1.2;
                case _0x4cf3d6(140):
                    return _0x51ef64 <= 20 ? 1.9 : _0x51ef64 <= 24 ? 0.5 : 0.3;
                case _0x4cf3d6(497):
                    return _0x51ef64 < _0x4d038d.sparkAge ? 0.75 : _0x51ef64 <= _0x4d038d[_0x4cf3d6(536)] + 2 ? 2.1 : 1;
                default:
                    return 1;
                }
            }(_0x5a265a) * _0x542b48;
        if (_0x5a265a.age <= 21) {
            _0x5a265a.stats.t = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].t + Math[_0x2e64ac(250)](_0x4faedf(2, 4) * _0x148101 * _0x5c0e4d * (_0x16b0ff(_0x5a265a, _0x2e64ac(170)) ? 1.4 : 1)), 1, 99);
            _0x5a265a[_0x2e64ac(507)].p = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].p + _0x704bac(1, 3), 1, 99);
            _0x5a265a.stats.m = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].m + _0x704bac(0, 2), 1, 99);
            _0x5a265a[_0x2e64ac(507)].c = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].c + _0x704bac(0, 1), 1, 99);
            ;
            const _0x12c260 = _0x2e64ac(355) === _0x5a265a[_0x2e64ac(468)].id || _0x2e64ac(140) === _0x5a265a[_0x2e64ac(468)].id || _0x2e64ac(497) === _0x5a265a[_0x2e64ac(468)].id && _0x5a265a[_0x2e64ac(205)] >= _0x5a265a[_0x2e64ac(536)], _0x182c30 = _0x5a265a[_0x2e64ac(214)].prodigy && _0x5a265a[_0x2e64ac(205)] <= 20;
            _0x12c260 && _0x148101 >= (_0x182c30 ? 0.3 : 0.5) && _0x5309e8() < (_0x182c30 ? 0.9 : 0.6) && (_0x5a265a[_0x2e64ac(507)].t = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].t + _0x704bac(_0x182c30 ? 5 : 3, _0x182c30 ? 9 : 6), 1, 99), _0x5a265a[_0x2e64ac(507)].p = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].p + _0x704bac(_0x182c30 ? 3 : 2, _0x182c30 ? 5 : 4), 1, 99), _0x5a265a[_0x2e64ac(507)].m = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].m + _0x704bac(_0x182c30 ? 2 : 1, _0x182c30 ? 4 : 3), 1, 99));
            _0x5a265a[_0x2e64ac(214)][_0x2e64ac(519)] && _0x5a265a[_0x2e64ac(205)] <= 18 && (_0x5a265a[_0x2e64ac(507)].t = _0xe3d09d(_0x5a265a.stats.t + _0x704bac(2, 4), 1, 99), _0x5a265a[_0x2e64ac(507)].p = _0xe3d09d(_0x5a265a.stats.p + _0x704bac(1, 3), 1, 99));
            ;
        } else {
            _0x5a265a[_0x2e64ac(205)] <= 25 ? (_0x5a265a.stats.t = _0xe3d09d(_0x5a265a.stats.t + Math[_0x2e64ac(250)](_0x4faedf(1, 2.5) * _0x148101 * _0x5c0e4d), 1, 99), _0x5a265a[_0x2e64ac(507)].p = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].p + _0x704bac(0, 2), 1, 99), _0x5a265a.stats.m = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].m + _0x704bac(0, 2), 1, 99), _0x5a265a[_0x2e64ac(507)].c = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].c + _0x704bac(0, 1), 1, 99), 'surge' === _0x5a265a.trajectory.id && _0x5a265a[_0x2e64ac(205)] >= _0x5a265a[_0x2e64ac(536)] && _0x5a265a[_0x2e64ac(205)] <= _0x5a265a[_0x2e64ac(536)] + 2 && _0x5309e8() < 0.7 && (_0x5a265a[_0x2e64ac(507)].t = _0xe3d09d(_0x5a265a.stats.t + _0x704bac(2, 5), 1, 99), _0x5a265a.stats.p = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].p + _0x704bac(1, 3), 1, 99), _0x5a265a[_0x2e64ac(507)].m = _0xe3d09d(_0x5a265a.stats.m + _0x704bac(1, 3), 1, 99))) : _0x5a265a.age <= 29 ? (_0x5a265a.stats.t = _0xe3d09d(_0x5a265a.stats.t + Math[_0x2e64ac(250)](_0x4faedf(0, 1.5) * _0x148101 * (_0x5c0e4d > 1.3 ? 0.6 * _0x5c0e4d : 0)), 1, 99), _0x5a265a.stats.m = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].m + _0x704bac(0, 1), 1, 99), _0x5309e8() < 0.4 && (_0x5a265a[_0x2e64ac(507)].p = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].p - 1, 1, 99))) : _0x5a265a[_0x2e64ac(205)] <= 32 ? (_0x5a265a[_0x2e64ac(507)].p = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].p - _0x704bac(1, 3), 1, 99), _0x5309e8() < 0.4 && (_0x5a265a[_0x2e64ac(507)].t = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].t - 1, 1, 99)), _0x5a265a.stats.m = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].m + _0x704bac(0, 1), 1, 99)) : _0x5a265a[_0x2e64ac(205)] <= 34 ? (_0x5a265a.stats.p = _0xe3d09d(_0x5a265a.stats.p - _0x704bac(2, 4) * (_0x16b0ff(_0x5a265a, _0x2e64ac(142)) ? 0.6 : 1), 1, 99), _0x5a265a.stats.t = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].t - _0x704bac(0, 2), 1, 99)) : _0x5a265a.age <= 37 ? (_0x5a265a[_0x2e64ac(507)].p = _0xe3d09d(_0x5a265a.stats.p - _0x704bac(3, 5) * (_0x16b0ff(_0x5a265a, _0x2e64ac(142)) ? 0.65 : 1), 1, 99), _0x5a265a[_0x2e64ac(507)].t = _0xe3d09d(_0x5a265a.stats.t - _0x704bac(1, 3), 1, 99), _0x5309e8() < 0.5 && (_0x5a265a[_0x2e64ac(507)].m = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].m - 1, 1, 99))) : (_0x5a265a[_0x2e64ac(507)].p = _0xe3d09d(_0x5a265a.stats.p - _0x704bac(4, 7) * (_0x16b0ff(_0x5a265a, 'ironman') ? 0.7 : 1), 1, 99), _0x5a265a[_0x2e64ac(507)].t = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].t - _0x704bac(2, 4), 1, 99), _0x5a265a[_0x2e64ac(507)].m = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].m - _0x704bac(0, 2), 1, 99));
        }
        _0x2e64ac(140) === _0x5a265a[_0x2e64ac(468)].id && _0x5a265a[_0x2e64ac(205)] >= 28 && (_0x5a265a.stats.p = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].p - 1, 1, 99), _0x5309e8() < 0.5 && (_0x5a265a.stats.t = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].t - 1, 1, 99)));
        'steady' === _0x5a265a[_0x2e64ac(468)].id && _0x5a265a.age >= 30 && _0x5309e8() < 0.5 && (_0x5a265a[_0x2e64ac(507)].p = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].p + 1, 1, 99));
        _0x16b0ff(_0x5a265a, 'leader') && (_0x5a265a[_0x2e64ac(507)].m = _0xe3d09d(_0x5a265a.stats.m + 1, 1, 99));
        _0x5a265a[_0x2e64ac(267)] && _0x5a265a[_0x2e64ac(267)][_0x2e64ac(458)][_0x2e64ac(385)] && (_0x5a265a.stats.m = _0xe3d09d(_0x5a265a[_0x2e64ac(507)].m + _0x5a265a[_0x2e64ac(267)][_0x2e64ac(458)].mGrowth, 1, 99));
        _0x16b0ff(_0x5a265a, _0x2e64ac(232)) && (_0x5a265a[_0x2e64ac(313)] = _0xe3d09d(_0x5a265a[_0x2e64ac(313)] - 4, 5, 100), _0x5a265a[_0x2e64ac(507)].c = _0xe3d09d(_0x5a265a.stats.c + 1, 1, 99));
        _0x5a265a.discipline >= 72 && _0x5309e8() < 0.5 && (_0x5a265a[_0x2e64ac(507)].t = _0xe3d09d(_0x5a265a.stats.t + 1, 1, 99));
        !_0x5a265a[_0x2e64ac(214)].wonderkid && _0x5a265a[_0x2e64ac(205)] < 22 && _0x1ba885(_0x5a265a) >= 85 && (_0x5a265a[_0x2e64ac(214)].wonderkid = true, _0x5a265a[_0x2e64ac(415)][_0x2e64ac(262)]({
            'age': _0x5a265a[_0x2e64ac(205)],
            'text': 'À ' + _0x5a265a[_0x2e64ac(205)] + ' ans, le monde entier parle déjà de vous comme d\'un phénomène.',
            'impact': 15
        }));
        _0x5a265a[_0x2e64ac(205)] < 23 && _0x1ba885(_0x5a265a) >= 85 && (_0x5a265a[_0x2e64ac(214)][_0x2e64ac(217)] = true);
        ;
        const _0x8560d2 = _0x5a265a[_0x2e64ac(150)];
        if (_0x8560d2) {
            const _0x1c135c = CLUBS[_0x2e64ac(308)](_0x2973e6 => _0x2973e6.id === _0x8560d2[_0x2e64ac(135)]), _0x59c67a = _0x1c135c && _0x5a265a[_0x2e64ac(270)].id === _0x8560d2[_0x2e64ac(135)] && !_0x5a265a[_0x2e64ac(539)];
            if (_0x1c135c) {
                const _0x244cf2 = _0x1d465c(_0x5a265a, _0x1c135c);
                if (!_0x8560d2.promoted || _0x2e64ac(464) !== _0x244cf2 && 'd2' !== _0x244cf2) {
                    !_0x8560d2[_0x2e64ac(210)] || 'd1' !== _0x244cf2 && 'd2' !== _0x244cf2 ? _0x59c67a && 'd1' === _0x244cf2 ? (_0x5a265a[_0x2e64ac(315)] = _0x8560d2.leaguePos <= 2 ? _0x5a265a[_0x2e64ac(315)] + 1 : 0, _0x5a265a[_0x2e64ac(315)] >= BALANCE[_0x2e64ac(516)] && (_0x63b484(_0x5a265a, _0x1c135c, 'elite'), _0x5a265a[_0x2e64ac(315)] = 0, _0x5a265a[_0x2e64ac(415)].push({
                        'age': _0x5a265a.age,
                        'text': _0x1c135c[_0x2e64ac(274)] + _0x2e64ac(515),
                        'impact': 8
                    }))) : _0x59c67a && _0x2e64ac(206) === _0x244cf2 && (_0x5a265a[_0x2e64ac(331)] = _0x8560d2.leaguePos >= 7 ? _0x5a265a[_0x2e64ac(331)] + 1 : 0, _0x5a265a[_0x2e64ac(331)] >= BALANCE[_0x2e64ac(157)] && (_0x63b484(_0x5a265a, _0x1c135c, 'd1'), _0x5a265a[_0x2e64ac(331)] = 0, _0x5a265a[_0x2e64ac(415)][_0x2e64ac(262)]({
                        'age': _0x5a265a[_0x2e64ac(205)],
                        'text': _0x1c135c[_0x2e64ac(274)] + _0x2e64ac(335),
                        'impact': -5
                    }))) : _0x13270a(_0x5a265a, _0x1c135c, -1);
                } else {
                    const _0x255aa5 = _0x13270a(_0x5a265a, _0x1c135c, 1);
                    _0x59c67a && _0x5a265a[_0x2e64ac(415)][_0x2e64ac(262)]({
                        'age': _0x5a265a[_0x2e64ac(205)],
                        'text': _0x1c135c[_0x2e64ac(274)] + _0x2e64ac(202) + LEVELS[_0x255aa5].short + _0x2e64ac(238),
                        'impact': 6
                    });
                }
            }
        }
        const _0x5563be = (_0x16b0ff(_0x5a265a, _0x2e64ac(541)) ? 70 : 60) + Math.round((_0x5a265a.teamRel - 55) / 8);
        if (_0x5a265a.form = _0xe3d09d(Math.round(_0x5a265a.form + 0.35 * (65 - _0x5a265a.form) + _0x4faedf(-6, 6)), 5, 100), _0x5a265a[_0x2e64ac(347)] = _0xe3d09d(Math[_0x2e64ac(250)](_0x5a265a[_0x2e64ac(347)] + 0.25 * (_0x5563be - _0x5a265a[_0x2e64ac(347)]) + _0x4faedf(-4, 4)), 5, 100), _0x16b0ff(_0x5a265a, _0x2e64ac(428)) && (_0x5a265a[_0x2e64ac(347)] = Math.max(_0x5a265a[_0x2e64ac(347)], 40)), _0x5a265a.discipline = _0xe3d09d(Math[_0x2e64ac(250)](_0x5a265a[_0x2e64ac(298)] + 0.06 * (50 - _0x5a265a[_0x2e64ac(298)])), 5, 100), _0x5a265a.coachRel = _0xe3d09d(Math[_0x2e64ac(250)](_0x5a265a.coachRel + 0.15 * (55 - _0x5a265a[_0x2e64ac(453)])), 5, 100), _0x5a265a[_0x2e64ac(188)] = _0xe3d09d(Math[_0x2e64ac(250)](_0x5a265a.teamRel + 0.12 * (55 - _0x5a265a[_0x2e64ac(188)]) + _0x4faedf(-3, 3)), 5, 100), _0x5a265a[_0x2e64ac(539)]) {
            const _0x31a5f3 = _0x5a265a.loan, _0x156428 = _0x31a5f3[_0x2e64ac(492)] || 6.5;
            _0x5a265a[_0x2e64ac(270)] = _0x31a5f3[_0x2e64ac(526)];
            _0x5a265a[_0x2e64ac(512)] = _0x31a5f3.parentCoach;
            _0x5a265a[_0x2e64ac(539)] = null;
            _0x156428 >= 7.2 ? (_0x5a265a.coachRel = 72, _0x5a265a[_0x2e64ac(313)] = _0xe3d09d(_0x5a265a[_0x2e64ac(313)] + 6, 5, 100), _0x5a265a[_0x2e64ac(415)][_0x2e64ac(262)]({
                'age': _0x5a265a[_0x2e64ac(205)],
                'text': _0x2e64ac(376) + _0x31a5f3[_0x2e64ac(526)].name + _0x2e64ac(294),
                'impact': 8
            }), _0x5309e8() < 0.6 && (_0x5a265a[_0x2e64ac(544)] = {
                'clubId': _0x31a5f3.loanClubId,
                'rating': _0x156428
            })) : _0x156428 >= 6.3 ? (_0x5a265a[_0x2e64ac(453)] = 60, _0x5a265a.history[_0x2e64ac(262)]({
                'age': _0x5a265a[_0x2e64ac(205)],
                'text': _0x2e64ac(505) + _0x31a5f3[_0x2e64ac(526)].name + _0x2e64ac(441),
                'impact': 3
            })) : (_0x5a265a.coachRel = 46, _0x5a265a[_0x2e64ac(556)] = _0xe3d09d(_0x5a265a.rep - 2, 0, 100), _0x5a265a.history[_0x2e64ac(262)]({
                'age': _0x5a265a[_0x2e64ac(205)],
                'text': _0x2e64ac(513) + _0x31a5f3[_0x2e64ac(526)][_0x2e64ac(274)] + ' doute ouvertement de vous.',
                'impact': -6
            }));
            _0x5a265a[_0x2e64ac(266)][_0x2e64ac(262)]({
                'age': _0x5a265a[_0x2e64ac(205)] + 1,
                'toClubName': _0x31a5f3[_0x2e64ac(526)].name,
                'countryName': _0x150a36(_0x31a5f3[_0x2e64ac(526)][_0x2e64ac(275)])[_0x2e64ac(274)],
                'fee': null,
                'loanReturn': true,
                'level': _0x1d465c(_0x5a265a, _0x31a5f3[_0x2e64ac(526)])
            });
            ;
        } else {
            if (_0x5309e8() < BALANCE.coachChangeChance) {
                _0x5a265a[_0x2e64ac(512)] = _0x3bcbbb(COACH_NAMES);
                _0x5a265a[_0x2e64ac(453)] = 48 + _0x704bac(0, 14);
            }
        }
        if (_0x5a265a.injuryWeeks = 0, _0x5a265a[_0x2e64ac(205)] += 1, _0x5a265a[_0x2e64ac(557)] += 1, _0x5a265a.contract.years -= 1, !_0x5a265a.natTeam.active && !_0x5a265a.natTeam[_0x2e64ac(187)] && _0x5a265a[_0x2e64ac(205)] >= 17) {
            const _0x4a4da8 = _0x235548(_0x1d465c(_0x5a265a, _0x5a265a[_0x2e64ac(270)]));
            let _0x1d38a7, _0x4ca708;
            _0x5a265a.age <= 18 ? (_0x1d38a7 = 81, _0x4ca708 = 58) : _0x5a265a[_0x2e64ac(205)] <= 20 ? (_0x1d38a7 = 77, _0x4ca708 = 52) : _0x5a265a[_0x2e64ac(205)] <= 23 ? (_0x1d38a7 = 74, _0x4ca708 = 50) : (_0x1d38a7 = 73, _0x4ca708 = 48);
            1 === _0x4a4da8 ? (_0x1d38a7 += 2, _0x4ca708 += 8) : 0 === _0x4a4da8 && (_0x1d38a7 += 5, _0x4ca708 += 16);
            _0x5a265a[_0x2e64ac(440)][_0x2e64ac(490)] >= 0.85 && _0x4a4da8 <= 1 && (_0x1d38a7 += 1 === _0x4a4da8 ? 3 : 5, _0x4ca708 += 1 === _0x4a4da8 ? 8 : 14);
            ;
            const _0x326237 = Math[_0x2e64ac(250)](8 * (1 - _0x5a265a[_0x2e64ac(440)][_0x2e64ac(490)]));
            _0x1d38a7 -= Math[_0x2e64ac(250)](_0x326237 / 2);
            _0x4ca708 -= _0x326237;
            _0x5a265a.flags[_0x2e64ac(279)] && (_0x4ca708 -= 4);
            _0x5a265a.rep >= _0x4ca708 && _0x1ba885(_0x5a265a) >= _0x1d38a7 && (_0x5a265a[_0x2e64ac(488)][_0x2e64ac(164)] = true, _0x5a265a[_0x2e64ac(205)] <= 18 && (_0x5a265a.flags[_0x2e64ac(131)] = true), _0x5a265a[_0x2e64ac(205)] <= 20 && (_0x5a265a[_0x2e64ac(214)][_0x2e64ac(518)] = true), _0x5a265a[_0x2e64ac(415)][_0x2e64ac(262)]({
                'age': _0x5a265a[_0x2e64ac(205)],
                'text': 'Première convocation avec ' + _0x5a265a[_0x2e64ac(440)][_0x2e64ac(274)] + (_0x5a265a[_0x2e64ac(205)] <= 19 ? _0x2e64ac(341) + _0x5a265a[_0x2e64ac(205)] + _0x2e64ac(439) : '') + '.',
                'impact': 8
            }));
            ;
        }
    }
    function _0xf2402b(_0x41c31e) {
        const _0x41fb86 = _0x2ae430, _0x3a9db2 = _0x41c31e[_0x41fb86(205)] < 24 ? 1.35 : _0x41c31e[_0x41fb86(205)] <= 28 ? 1.1 : _0x41c31e[_0x41fb86(205)] <= 31 ? 0.65 : 0.3;
        return Math[_0x41fb86(398)](0.2, 1.5 * (_0x1ba885(_0x41c31e) - 50) * _0x3a9db2 * (1 + _0x41c31e[_0x41fb86(556)] / 90));
    }
    function _0xf756d0(_0x3a2a88, _0x8dd162) {
        const _0x4da92f = _0x2ae430;
        return !((_0x150a36(_0x8dd162.countryId) || {})[_0x4da92f(548)] || BALANCE[_0x4da92f(474)].includes(_0x8dd162.countryId) && _0x4da92f(206) === _0x1d465c(_0x3a2a88, _0x8dd162));
    }
    function _0x3d7a95(_0x31d91b, _0x103979, _0x4b7d70) {
        const _0x364354 = _0x2ae430, _0x1f491f = _0x150a36(_0x103979[_0x364354(275)]) || {};
        return _0x4b7d70[_0x1d465c(_0x31d91b, _0x103979)] * (_0x1f491f.salaryMult || 1);
    }
    function _0x5d3b38(_0x5d6ea1, _0x13a1e4) {
        const _0x547b64 = _0x2ae430, _0x218c2d = _0x150a36(_0x13a1e4.countryId);
        let _0x11093e = (_0x218c2d && _0x218c2d[_0x547b64(548)] ? BALANCE[_0x547b64(273)][_0x547b64(206)] : BALANCE[_0x547b64(273)][_0x1d465c(_0x5d6ea1, _0x13a1e4)]) * (_0x218c2d ? _0x218c2d.salaryMult : 1) * (0.4 + _0x1ba885(_0x5d6ea1) / 90 + _0x5d6ea1[_0x547b64(556)] / 160) * _0x4faedf(0.85, 1.25);
        return _0xf756d0(_0x5d6ea1, _0x13a1e4) && (_0x11093e = Math[_0x547b64(449)](_0x11093e * BALANCE[_0x547b64(145)], _0x3d7a95(_0x5d6ea1, _0x13a1e4, BALANCE[_0x547b64(277)]))), Math[_0x547b64(398)](0.02, Math[_0x547b64(250)](100 * _0x11093e) / 100);
    }
    function _0x30f69b(_0x4c7b1d, _0x4b869b) {
        const _0x1dca3c = _0x2ae430, _0x301f15 = !!_0x150a36(_0x4b869b.countryId)[_0x1dca3c(548)];
        let _0x4b5cd1 = _0xf2402b(_0x4c7b1d) * BALANCE.feeMult[_0x1d465c(_0x4c7b1d, _0x4b869b)] * (_0x301f15 ? 1.4 : 1) * _0x4faedf(0.8, 1.3);
        return _0xf756d0(_0x4c7b1d, _0x4b869b) && (_0x4b5cd1 = Math[_0x1dca3c(449)](_0x4b5cd1 * BALANCE[_0x1dca3c(194)], _0x3d7a95(_0x4c7b1d, _0x4b869b, BALANCE[_0x1dca3c(209)]))), {
            'club': _0x4b869b,
            'fee': Math[_0x1dca3c(398)](0.1, Math[_0x1dca3c(250)](10 * _0x4b5cd1) / 10),
            'salary': _0x5d3b38(_0x4c7b1d, _0x4b869b),
            'years': _0x704bac(2, 5),
            'exotic': _0x301f15
        };
    }
    function _0x434c52(_0x6fcb22, _0x474511) {
        const _0x51136f = _0x2ae430;
        let _0x1587e2 = _0x474511 && null != _0x474511.d ? _0x474511.d : 0;
        const _0x3e3426 = LEVEL_ORDER[_0x51136f(256)](_0x1d465c(_0x6fcb22, _0x6fcb22[_0x51136f(270)]));
        _0x6fcb22.age >= 35 && (_0x1587e2 = Math[_0x51136f(449)](_0x1587e2, 0));
        let _0x2f9113 = _0x474511 && _0x474511[_0x51136f(402)] ? _0x474511[_0x51136f(402)] : LEVEL_ORDER[_0xe3d09d(_0x3e3426 + _0x1587e2, 0, LEVEL_ORDER[_0x51136f(546)] - 1)];
        _0x6fcb22[_0x51136f(205)] >= 35 && LEVEL_ORDER[_0x51136f(256)](_0x2f9113) > _0x3e3426 && (_0x2f9113 = LEVEL_ORDER[_0x3e3426]);
        'af' === (_0x150a36(_0x6fcb22[_0x51136f(270)][_0x51136f(275)]) || {}).continent && _0x51136f(206) === _0x2f9113 && (_0x2f9113 = 'd1');
        ;
        const _0xdd50a7 = _0x6fcb22[_0x51136f(293)][_0x51136f(546)] > 1, _0x3ad15b = _0x6fcb22.age < 18 && 'br' === _0x6fcb22.club[_0x51136f(275)];
        let _0x27e480;
        if (_0x474511 && _0x474511[_0x51136f(135)]) {
            return CLUBS.filter(_0x522617 => _0x522617.id === _0x474511.clubId && _0x522617.id !== _0x6fcb22[_0x51136f(270)].id)[_0x51136f(496)](_0xae7a8b => _0x30f69b(_0x6fcb22, _0xae7a8b));
        }
        if (_0x474511 && _0x474511[_0x51136f(540)]) {
            return CLUBS[_0x51136f(173)](_0x3ca56b => _0x3ca56b.id === _0x6fcb22[_0x51136f(293)][0] && _0x3ca56b.id !== _0x6fcb22.club.id)[_0x51136f(496)](_0xd205c2 => _0x30f69b(_0x6fcb22, _0xd205c2));
        }
        _0x27e480 = _0x474511 && _0x474511[_0x51136f(548)] && !_0x3ad15b ? CLUBS.filter(_0x3b8c75 => _0x150a36(_0x3b8c75[_0x51136f(275)])[_0x51136f(548)] && _0x3b8c75.id !== _0x6fcb22[_0x51136f(270)].id) : CLUBS_BY_LEVEL[_0x2f9113][_0x51136f(173)](_0x41dced => !(_0x150a36(_0x41dced[_0x51136f(275)]).exotic || _0x41dced.id === _0x6fcb22[_0x51136f(270)].id || (_0x3ad15b ? _0x41dced[_0x51136f(275)] !== _0x6fcb22.club.countryId : _0x474511 && _0x474511.home ? _0x41dced[_0x51136f(275)] !== _0x6fcb22.nationality[_0x51136f(330)] : _0x474511 && _0x474511.domestic ? _0x41dced.countryId !== _0x6fcb22[_0x51136f(270)][_0x51136f(275)] : _0xdd50a7 && !BALANCE[_0x51136f(521)][_0x51136f(168)](_0x41dced.countryId) || _0x474511 && _0x474511.cross && _0x41dced[_0x51136f(275)] === _0x6fcb22[_0x51136f(270)][_0x51136f(275)])));
        0 === _0x27e480[_0x51136f(546)] && _0x474511 && _0x474511[_0x51136f(475)] && (_0x27e480 = CLUBS.filter(_0x15cf91 => _0x15cf91.countryId === _0x6fcb22[_0x51136f(440)].homeCountryId && _0x15cf91.id !== _0x6fcb22[_0x51136f(270)].id && !_0x150a36(_0x15cf91.countryId)[_0x51136f(548)]));
        0 === _0x27e480[_0x51136f(546)] && (_0x27e480 = CLUBS_BY_LEVEL[_0x2f9113][_0x51136f(173)](_0x5ba969 => _0x5ba969.id !== _0x6fcb22[_0x51136f(270)].id && !_0x150a36(_0x5ba969[_0x51136f(275)])[_0x51136f(548)] && (!_0xdd50a7 || BALANCE[_0x51136f(521)][_0x51136f(168)](_0x5ba969.countryId))));
        0 === _0x27e480[_0x51136f(546)] && (_0x27e480 = CLUBS_BY_LEVEL[_0x2f9113][_0x51136f(173)](_0x407f5b => _0x407f5b.id !== _0x6fcb22.club.id));
        ;
        const _0x561a49 = Math.min(_0x27e480.length, _0x704bac(1, 3)), _0x1248cf = [..._0x27e480].sort(() => _0x5309e8() - 0.5)[_0x51136f(311)](0, _0x561a49)[_0x51136f(496)](_0x4164df => _0x30f69b(_0x6fcb22, _0x4164df));
        return _0x6fcb22[_0x51136f(214)][_0x51136f(380)] && _0x1248cf[_0x51136f(218)](_0x1e71bd => {
            const _0x52300b = _0x51136f;
            _0x1e71bd[_0x52300b(316)] = Math[_0x52300b(250)](0.75 * _0x1e71bd[_0x52300b(316)] * 10) / 10;
        }), _0x1248cf;
    }
    function _0x2d5b33(_0x3405f7) {
        const _0x1bbd6c = _0x2ae430, _0x3dab1e = LEVEL_ORDER.indexOf(_0x1d465c(_0x3405f7, _0x3405f7[_0x1bbd6c(270)])), _0x588528 = [
                LEVEL_ORDER[Math[_0x1bbd6c(398)](0, _0x3dab1e - 1)],
                LEVEL_ORDER[Math[_0x1bbd6c(398)](0, _0x3dab1e - 2)]
            ];
        let _0x1401cf = CLUBS[_0x1bbd6c(173)](_0xcc4a54 => _0x588528.includes(_0xcc4a54[_0x1bbd6c(396)]) && _0xcc4a54.id !== _0x3405f7.club.id && !_0x150a36(_0xcc4a54[_0x1bbd6c(275)]).exotic);
        const _0x4e191c = _0x1401cf.filter(_0x1b1d5b => _0x1b1d5b.countryId === _0x3405f7[_0x1bbd6c(270)].countryId);
        return _0x4e191c.length >= 2 && (_0x1401cf = _0x4e191c), [..._0x1401cf][_0x1bbd6c(176)](() => _0x5309e8() - 0.5).slice(0, Math.min(_0x1401cf[_0x1bbd6c(546)], _0x704bac(2, 3)))[_0x1bbd6c(496)](_0x51902e => ({
            'club': _0x51902e,
            'loan': true
        }));
    }
    function _0x1cfd56(_0x320d79, _0x372a35) {
        const _0x1a8ae0 = _0x2ae430;
        _0x320d79.loan = {
            'parentClub': _0x320d79.club,
            'parentCoach': _0x320d79[_0x1a8ae0(512)],
            'loanClubId': _0x372a35[_0x1a8ae0(270)].id
        };
        _0x320d79[_0x1a8ae0(270)] = _0x372a35[_0x1a8ae0(270)];
        _0x320d79.coach = _0x3bcbbb(COACH_NAMES);
        _0x320d79[_0x1a8ae0(453)] = 58;
        _0x320d79[_0x1a8ae0(293)][_0x1a8ae0(168)](_0x372a35[_0x1a8ae0(270)].id) || _0x320d79[_0x1a8ae0(293)].push(_0x372a35[_0x1a8ae0(270)].id);
        _0x320d79[_0x1a8ae0(266)].push({
            'age': _0x320d79[_0x1a8ae0(205)],
            'fromClubName': _0x320d79[_0x1a8ae0(539)][_0x1a8ae0(526)][_0x1a8ae0(274)],
            'toClubName': _0x372a35[_0x1a8ae0(270)][_0x1a8ae0(274)],
            'countryName': _0x150a36(_0x372a35[_0x1a8ae0(270)][_0x1a8ae0(275)]).name,
            'fee': null,
            'loan': true,
            'level': _0x1d465c(_0x320d79, _0x372a35.club)
        });
        _0x320d79.history.push({
            'age': _0x320d79.age,
            'text': 'Prêté une saison à ' + _0x372a35[_0x1a8ae0(270)].name + ' pour s\'aguerrir.',
            'impact': 4
        });
        ;
    }
    function _0x506a85(_0x5c0c86, _0x40e0d0) {
        const _0x18e4d6 = _0x2ae430;
        if (_0x5c0c86[_0x18e4d6(205)] >= BALANCE[_0x18e4d6(514)]) {
            return null;
        }
        if (_0x5c0c86[_0x18e4d6(539)]) {
            return null;
        }
        const _0x40c8e7 = _0x5c0c86[_0x18e4d6(363)][_0x18e4d6(542)] <= 0;
        let _0x174f7a = null;
        if (_0x5c0c86[_0x18e4d6(544)]) {
            const _0x43540a = CLUBS[_0x18e4d6(308)](_0x303d57 => _0x303d57.id === _0x5c0c86[_0x18e4d6(544)][_0x18e4d6(135)]);
            if (_0x5c0c86.loanReturn = null, _0x43540a) {
                return {
                    'reason': _0x43540a[_0x18e4d6(274)] + _0x18e4d6(451),
                    'offers': [_0x30f69b(_0x5c0c86, _0x43540a)],
                    'contractUp': false,
                    'renewSalary': _0x5d3b38(_0x5c0c86, _0x5c0c86[_0x18e4d6(270)])
                };
            }
        }
        _0x40c8e7 ? (_0x174f7a = 'Votre contrat se termine dans moins de 2 ans, votre agent et le club vous mettent la pression : il faut trancher.', _0x190564 = { 'd': _0x40e0d0 && _0x40e0d0[_0x18e4d6(492)] >= 7.2 ? 1 : 0 }) : _0x40e0d0 && _0x40e0d0.promoted ? (_0x174f7a = _0x18e4d6(144) + _0x5c0c86[_0x18e4d6(270)].name + ' fait de vous une cible : rester pour l\'aventure, ou viser encore plus haut ?', _0x190564 = { 'd': 1 }) : _0x40e0d0 && _0x40e0d0[_0x18e4d6(210)] ? (_0x174f7a = 'La relégation de ' + _0x5c0c86[_0x18e4d6(270)][_0x18e4d6(274)] + ' ouvre votre bon de sortie.', _0x190564 = { 'd': 0 }) : _0x40e0d0 && _0x40e0d0[_0x18e4d6(163)] ? _0x5309e8() < 0.65 && (_0x174f7a = 'Votre temps de jeu famélique alerte tout le marché.', _0x190564 = { 'd': -1 }) : _0x40e0d0 && _0x40e0d0[_0x18e4d6(492)] >= 7.8 && _0x5c0c86.rep >= 50 && _0x18e4d6(206) !== _0x1d465c(_0x5c0c86, _0x5c0c86[_0x18e4d6(270)]) ? _0x5309e8() < 0.5 && (_0x174f7a = _0x18e4d6(382), _0x190564 = { 'd': 1 }) : _0x5c0c86[_0x18e4d6(214)][_0x18e4d6(471)] ? (delete _0x5c0c86[_0x18e4d6(214)].listed, _0x174f7a = 'Le club vous a placé sur la liste des transferts : le marché s\'organise.', _0x190564 = { 'd': _0x40e0d0 && _0x40e0d0[_0x18e4d6(492)] >= 7 ? 0 : -1 }) : _0x5309e8() < BALANCE[_0x18e4d6(477)] && (_0x174f7a = _0x18e4d6(350), _0x190564 = {
            'd': _0x5309e8() < 0.35 ? 1 : 0,
            'cross': _0x5309e8() < 0.3
        });
        const _0x547556 = !!(_0x40e0d0 && _0x40e0d0[_0x18e4d6(365)] && _0x40e0d0[_0x18e4d6(365)][_0x18e4d6(168)](_0x18e4d6(367)));
        if (!_0x174f7a && _0x547556 && (_0x174f7a = _0x18e4d6(472), _0x190564 = { 'd': 1 }), !_0x174f7a) {
            return null;
        }
        _0x5c0c86[_0x18e4d6(205)] >= 28 && _0x5c0c86.rep >= 55 && _0x5309e8() < 0.25 && (_0x190564[_0x18e4d6(322)] = true);
        let _0x140b89 = _0x5309e8() < BALANCE[_0x18e4d6(133)] && !_0x40c8e7 && !_0x547556 ? [] : _0x434c52(_0x5c0c86, _0x190564);
        if (_0x547556 && !_0x140b89.length && (_0x140b89 = _0x434c52(_0x5c0c86, { 'd': 0 })), _0x190564[_0x18e4d6(322)]) {
            const _0x5930b6 = _0x434c52(_0x5c0c86, { 'exotic': true });
            _0x5930b6[_0x18e4d6(546)] && (_0x140b89 = _0x140b89[_0x18e4d6(414)](_0x5930b6[_0x18e4d6(311)](0, 1)));
        }
        return {
            'reason': _0x174f7a,
            'offers': _0x140b89,
            'contractUp': _0x40c8e7,
            'renewSalary': _0x5d3b38(_0x5c0c86, _0x5c0c86.club)
        };
    }
    function _0x2863bc(_0x2ab90e, _0x2c0bc0) {
        const _0x19fe18 = _0x2ae430, _0x4b4596 = _0x2ab90e.club;
        _0x2ab90e[_0x19fe18(159)] = {
            'id': _0x4b4596.id,
            'name': _0x4b4596[_0x19fe18(274)],
            'countryId': _0x4b4596[_0x19fe18(275)],
            'level': _0x1d465c(_0x2ab90e, _0x4b4596)
        };
        _0x2ab90e[_0x19fe18(270)] = _0x2c0bc0.club;
        _0x2ab90e[_0x19fe18(512)] = _0x3bcbbb(COACH_NAMES);
        _0x2ab90e[_0x19fe18(453)] = 55 + _0x704bac(0, 8);
        _0x2ab90e[_0x19fe18(188)] = 52 + _0x704bac(0, 10);
        _0x2ab90e[_0x19fe18(363)] = {
            'salary': _0x2c0bc0[_0x19fe18(395)],
            'years': _0x2c0bc0.years
        };
        _0x2ab90e[_0x19fe18(180)] += Math.min(3, 0.06 * _0x2c0bc0[_0x19fe18(316)]);
        _0x2ab90e[_0x19fe18(315)] = 0;
        _0x2ab90e.clubFade = 0;
        _0x2ab90e.clubsPlayed[_0x19fe18(168)](_0x2c0bc0[_0x19fe18(270)].id) || _0x2ab90e[_0x19fe18(293)].push(_0x2c0bc0.club.id);
        _0x2ab90e[_0x19fe18(266)][_0x19fe18(262)]({
            'age': _0x2ab90e[_0x19fe18(205)],
            'fromClubName': _0x4b4596[_0x19fe18(274)],
            'toClubName': _0x2c0bc0[_0x19fe18(270)][_0x19fe18(274)],
            'countryName': _0x150a36(_0x2c0bc0.club[_0x19fe18(275)])[_0x19fe18(274)],
            'fee': _0x2c0bc0.fee,
            'level': _0x1d465c(_0x2ab90e, _0x2c0bc0.club)
        });
        _0x2ab90e[_0x19fe18(415)][_0x19fe18(262)]({
            'age': _0x2ab90e[_0x19fe18(205)],
            'text': _0x19fe18(425) + _0x2c0bc0.club[_0x19fe18(274)] + _0x19fe18(213) + _0x239a0d(_0x2c0bc0[_0x19fe18(316)]) + '.',
            'impact': 5
        });
        _0x2ab90e.justTransferred = true;
        ;
        const _0x43ed1c = _0x150a36(_0x2c0bc0[_0x19fe18(270)][_0x19fe18(275)]);
        _0x43ed1c && (_0x2ab90e.continentsPlayed[_0x19fe18(168)](_0x43ed1c[_0x19fe18(531)]) || _0x2ab90e.continentsPlayed[_0x19fe18(262)](_0x43ed1c.continent), _0x43ed1c.exotic && (_0x2ab90e[_0x19fe18(214)][_0x19fe18(386)] = true, _0x2ab90e.age >= 33 && (_0x2ab90e[_0x19fe18(214)].exotic_late = true)));
        _0x16b0ff(_0x2ab90e, _0x19fe18(269)) && (_0x2ab90e[_0x19fe18(347)] = _0xe3d09d(_0x2ab90e[_0x19fe18(347)] - 4, 5, 100));
        ;
    }
    function _0x4e33bd(_0x2a2a0e, _0x4432a8) {
        const _0xaca197 = _0x2ae430;
        _0x2a2a0e.contract = {
            'salary': _0x4432a8 ? _0x4432a8[_0xaca197(390)] : _0x5d3b38(_0x2a2a0e, _0x2a2a0e[_0xaca197(270)]),
            'years': _0x704bac(2, 4)
        };
        _0x16b0ff(_0x2a2a0e, 'loyal') && (_0x2a2a0e[_0xaca197(347)] = _0xe3d09d(_0x2a2a0e.moral + 4, 5, 100));
        ;
    }
    function _0x49cd5c(_0x1638fe) {
        const _0x5da0b3 = _0x2ae430;
        return Object[_0x5da0b3(148)](_0x1638fe[_0x5da0b3(486)])[_0x5da0b3(310)]((_0x136d10, _0x46de84) => _0x136d10 + _0x46de84, 0);
    }
    function _0x5438e9(_0x4d1d46) {
        const _0x1e6887 = _0x2ae430, _0x540350 = _0x4d1d46.trophies;
        return Math.round(1 * _0x4d1d46.peakOvr + 0.45 * _0x4d1d46[_0x1e6887(556)] + 20 * _0x540350.worldCup + 18 * _0x540350[_0x1e6887(417)] + 9 * _0x540350[_0x1e6887(257)] + 4 * _0x540350[_0x1e6887(401)] + 2 * _0x540350[_0x1e6887(203)] + 5 * _0x540350[_0x1e6887(367)] + Math.min(12, 1.2 * _0x49cd5c(_0x4d1d46)) + Math[_0x1e6887(449)](20, _0x4d1d46[_0x1e6887(488)][_0x1e6887(160)] / 6) + Math[_0x1e6887(449)](15, _0x4d1d46[_0x1e6887(511)][_0x1e6887(443)] / 30) + 0.05 * _0x4d1d46[_0x1e6887(180)]);
    }
    function _0xb7d07b(_0x2e787a) {
        const _0x5c17a0 = _0x2ae430;
        if (_0x2e787a.careerEnded && _0x2e787a[_0x5c17a0(301)]) {
            return _0x5c17a0(391) === _0x2e787a[_0x5c17a0(301)] ? {
                'title': _0x5c17a0(236),
                'story': _0x5c17a0(489)
            } : {
                'title': _0x5c17a0(285),
                'story': 'Une blessure sévère a stoppé net votre progression, alors que tout semblait encore possible. Le destin en a décidé autrement.'
            };
        }
        const _0x562a36 = _0x5438e9(_0x2e787a), _0x2e8d75 = _0x2e787a.trophies;
        return (_0x2e8d75.worldCup > 0 || _0x2e8d75.ballon > 0) && _0x562a36 < 170 ? {
            'title': _0x5c17a0(429),
            'story': _0x5c17a0(334)
        } : _0x562a36 >= 235 ? {
            'title': 'Légende du football mondial',
            'story': _0x5c17a0(158)
        } : _0x562a36 >= 196 ? {
            'title': _0x5c17a0(137),
            'story': 'Vous avez marqué votre époque et forcé le respect de tout un sport, bien au-delà des frontières de vos clubs.'
        } : _0x562a36 >= 148 ? {
            'title': _0x5c17a0(509),
            'story': 'Une carrière remarquable, de celles qui remplissent les stades et les albums de vignettes.'
        } : _0x562a36 >= 105 ? {
            'title': 'Carrière solide et respectée',
            'story': 'Sans être une superstar, vous avez mené une carrière dont vous pouvez être fier, reconnue par vos pairs.'
        } : _0x562a36 >= 78 ? {
            'title': _0x5c17a0(523),
            'story': _0x5c17a0(325)
        } : {
            'title': _0x5c17a0(500),
            'story': _0x5c17a0(480)
        };
    }
    function _0x1a4203(_0xda9992, _0x18774b) {
        const _0x4449e5 = _0x2ae430;
        return [..._0xda9992][_0x4449e5(176)]((_0x4dd155, _0x884b11) => Math[_0x4449e5(193)](_0x884b11[_0x4449e5(469)]) - Math.abs(_0x4dd155[_0x4449e5(469)]))[_0x4449e5(311)](0, _0x18774b);
    }
    const _0x2c8da9 = {
        'rng': _0x5309e8,
        'setSeed': function (_0x3f93ef) {
            _0x41f421 = 0 | _0x3f93ef || 1;
        },
        'clearSeed': function () {
            _0x41f421 = null;
        },
        'getSeedState': function () {
            return _0x41f421;
        },
        'setSeedState': function (_0x3180be) {
            _0x41f421 = null == _0x3180be ? null : 0 | _0x3180be;
        },
        'clamp': _0xe3d09d,
        'rand': _0x4faedf,
        'randInt': _0x704bac,
        'pick': _0x3bcbbb,
        'weightedRandom': _0x39f973,
        'countryOf': _0x150a36,
        'levelRank': _0x235548,
        'lvlOf': _0x1d465c,
        'fmtMoney': _0x239a0d,
        'rollPotential': _0xfbf201,
        'potStars': function (_0x5eb8b3) {
            return _0x5eb8b3 <= 74 ? 1 : _0x5eb8b3 <= 80 ? 2 : _0x5eb8b3 <= 85 ? 3 : _0x5eb8b3 <= 91 ? 4 : 5;
        },
        'prodigyChance': _0x64bc3c,
        'pickTrajectory': _0x15d8b1,
        'academyOffers': _0x5beecf,
        'generateName': _0x2b3379,
        'newCareer': _0x16f96d,
        'ovr': _0x1ba885,
        'hasTrait': _0x16b0ff,
        'renderText': _0x14e6ce,
        'applyFx': _0xa6ab68,
        'eventEligible': _0x5b47c4,
        'pickEvent': _0x5ad82b,
        'optionEligible': _0x5dddff,
        'resolveOption': _0x2408e4,
        'netImpact': _0x1f3856,
        'toneOf': _0xd005e3,
        'keyMomentFor': _0x41c855,
        'keyMomentSuccess': _0x1686d5,
        'playKeyMoment': _0x560959,
        'isWorldCupYear': _0x5e0923,
        'playWorldCup': _0x4e27f8,
        'resolveWcFinal': _0x2224a3,
        'playingTimeFactor': _0x377f64,
        'setSeasonObjective': _0x39c880,
        'objectiveMet': _0x28c53c,
        'headlineFor': _0x58e1e4,
        'grantAward': _0x1648b7,
        'rollSeasonAwards': _0x9673d7,
        'rollBallon': _0x33afb6,
        'playSeason': _0x4cb725,
        'resolveSeasonMoment': _0x3c6118,
        'advanceYear': _0x3ee1e8,
        'marketValue': _0xf2402b,
        'salaryFor': _0x5d3b38,
        'buildOffer': _0x30f69b,
        'offersFor': _0x434c52,
        'loanOffersFor': _0x2d5b33,
        'applyLoan': _0x1cfd56,
        'transferWindow': _0x506a85,
        'applyTransfer': _0x2863bc,
        'renewContract': _0x4e33bd,
        'totalAwards': _0x49cd5c,
        'careerRating': function (_0x1ac663) {
            const _0x316525 = _0x2ae430, _0x33525d = _0x1ac663.trophies;
            let _0x2ff751 = 2 * _0x33525d.ballon + 2 * _0x33525d[_0x316525(197)] + Math[_0x316525(449)](3, _0x33525d[_0x316525(257)]) + Math.min(2, 0.4 * _0x33525d[_0x316525(401)]) + Math[_0x316525(449)](1.5, 0.15 * _0x49cd5c(_0x1ac663)) + (_0x1ac663[_0x316525(488)][_0x316525(160)] >= 100 ? 1 : 0) + (_0x1ac663.totals.matches >= 700 ? 0.5 : 0) + (_0x1ac663[_0x316525(556)] >= 90 ? 1 : 0);
            return Math[_0x316525(449)](97, Math.round(_0x1ac663[_0x316525(393)] + Math[_0x316525(449)](11, _0x2ff751)));
        },
        'computeCareerScore': _0x5438e9,
        'visibilityOf': _0x3ab06f,
        'careerTitle': _0xb7d07b,
        'pickHighlights': _0x1a4203,
        'buildNarrative': function (_0x1e85a1) {
            const _0x102c8b = _0x2ae430, _0x5e96ee = _0xb7d07b(_0x1e85a1), _0x901a56 = _0x1a4203(_0x1e85a1[_0x102c8b(415)], 2).map(_0xf04123 => _0xf04123.text).join(' ');
            return {
                'title': _0x5e96ee[_0x102c8b(229)],
                'story': _0x901a56 ? _0x5e96ee[_0x102c8b(179)] + ' ' + _0x901a56 : _0x5e96ee[_0x102c8b(179)]
            };
        },
        'buildUntakenPath': function (_0x4f26f7) {
            const _0x45cc3e = _0x2ae430, _0x2a5f77 = _0x4f26f7[_0x45cc3e(415)][_0x45cc3e(173)](_0x3a1e20 => Math.abs(_0x3a1e20[_0x45cc3e(469)]) >= 5);
            if (!_0x2a5f77[_0x45cc3e(546)]) {
                return null;
            }
            const _0x130075 = _0x3bcbbb(_0x2a5f77.slice(0, 6));
            return _0x3bcbbb(UNTAKEN_PATH_TEMPLATES).replace(_0x45cc3e(237), _0x130075[_0x45cc3e(205)]);
        },
        'newRival': function (_0x4d1575) {
            const _0x849f44 = _0x2ae430, _0x12691d = _0x3bcbbb(NATIONALITIES), _0x562063 = _0x3bcbbb(ORIGINS), _0x5967db = _0x4d1575 || _0x3bcbbb(POSITIONS), _0xd14f7c = _0x3bcbbb(LIFESTYLES), _0xa31366 = _0x3bcbbb(ENTOURAGES), _0x1f186b = _0xfbf201(_0x562063, _0xd14f7c, _0xa31366), _0x32cd2c = _0x5beecf({
                    'nationality': _0x12691d,
                    'origin': _0x562063,
                    'lifestyle': _0xd14f7c,
                    'entourage': _0xa31366,
                    'potCap': _0x1f186b
                });
            return _0x16f96d({
                'nationality': _0x12691d,
                'origin': _0x562063,
                'position': _0x5967db,
                'lifestyle': _0xd14f7c,
                'entourage': _0xa31366,
                'potCap': _0x1f186b,
                'club': _0x32cd2c.length ? _0x3bcbbb(_0x32cd2c)[_0x849f44(270)] : _0x3bcbbb(CLUBS_BY_LEVEL.regional)
            });
        },
        'rivalSeason': function (_0x2c2e40) {
            const _0x2ec3a2 = _0x2ae430;
            if (_0x2c2e40[_0x2ec3a2(195)] || _0x2c2e40[_0x2ec3a2(473)] || _0x2c2e40.age > BALANCE[_0x2ec3a2(514)]) {
                return null;
            }
            const _0x1f8aa5 = _0x5ad82b(_0x2c2e40);
            if (_0x1f8aa5) {
                const _0x1f6a29 = _0x1f8aa5[_0x2ec3a2(243)][_0x2ec3a2(173)](_0x2eaa6b => _0x5dddff(_0x2c2e40, _0x2eaa6b)), _0x4d707f = _0x3bcbbb(_0x1f6a29[_0x2ec3a2(546)] ? _0x1f6a29 : _0x1f8aa5.options), _0xebac3e = _0x2408e4(_0x2c2e40, _0x4d707f);
                if (_0x2c2e40[_0x2ec3a2(195)]) {
                    return null;
                }
                if (_0xebac3e.outcome.fx && _0xebac3e[_0x2ec3a2(327)].fx[_0x2ec3a2(460)] && !_0xebac3e[_0x2ec3a2(327)].fx[_0x2ec3a2(460)][_0x2ec3a2(545)]) {
                    const _0x217a6d = _0x434c52(_0x2c2e40, _0xebac3e.outcome.fx.transfer);
                    _0x217a6d[_0x2ec3a2(546)] && _0x5309e8() < 0.7 && _0x2863bc(_0x2c2e40, _0x3bcbbb(_0x217a6d));
                } else {
                    if (_0xebac3e.outcome.fx && _0xebac3e[_0x2ec3a2(327)].fx.loan) {
                        const _0x561fd8 = _0x2d5b33(_0x2c2e40);
                        _0x561fd8.length && _0x1cfd56(_0x2c2e40, _0x3bcbbb(_0x561fd8));
                    }
                }
            }
            if (_0x2c2e40[_0x2ec3a2(205)] <= 18 && _0x5309e8() < BALANCE[_0x2ec3a2(259)]) {
                return _0x2c2e40[_0x2ec3a2(195)] = true, _0x2c2e40[_0x2ec3a2(301)] = 'injury', null;
            }
            const _0x3d43c0 = _0x4cb725(_0x2c2e40);
            for (_0x3d43c0.wc && _0x3d43c0.wc.finalPending && _0x2224a3(_0x2c2e40, _0x3d43c0, null); _0x3d43c0.pendingMoments[_0x2ec3a2(546)];) {
                _0x3c6118(_0x2c2e40, _0x3d43c0, _0x3d43c0.pendingMoments[_0x2ec3a2(174)](), null);
            }
            const _0x4e232c = _0x506a85(_0x2c2e40, _0x3d43c0);
            return _0x4e232c && (_0x4e232c[_0x2ec3a2(220)].length && _0x5309e8() < 0.6 ? _0x2863bc(_0x2c2e40, _0x3bcbbb(_0x4e232c[_0x2ec3a2(220)])) : _0x4e33bd(_0x2c2e40, _0x4e232c)), _0x3ee1e8(_0x2c2e40), _0x3d43c0;
        },
        'rivalNewsLine': function (_0x5a0ff9, _0xd4561d, _0x209b5c) {
            const _0xbe8c06 = _0x2ae430;
            return _0xd4561d ? null != _0x209b5c && Math.abs(_0x209b5c) > 12 && _0x5309e8() < 0.35 ? _0x3bcbbb(_0x209b5c >= 0 ? RIVAL_NEWS_AHEAD : RIVAL_NEWS_BEHIND).replace(/\{rival\}/g, _0x5a0ff9.name) : _0x3bcbbb(_0xd4561d[_0xbe8c06(492)] >= 7 || _0xd4561d[_0xbe8c06(365)].length > 0 ? RIVAL_NEWS_GOOD : RIVAL_NEWS_BAD).replace(/\{rival\}/g, _0x5a0ff9[_0xbe8c06(274)]) : null;
        },
        'compareVerdict': function (_0x14f88a, _0x10e0a9) {
            const _0x59fb08 = _0x2ae430;
            if (_0x14f88a[_0x59fb08(195)]) {
                return 'Le destin ne vous aura pas laissé la moindre chance de rivaliser. ' + _0x10e0a9[_0x59fb08(274)] + _0x59fb08(353);
            }
            if (_0x10e0a9[_0x59fb08(195)]) {
                return _0x10e0a9[_0x59fb08(274)] + ' n\'aura même pas eu la chance de faire ses preuves. Le destin vous aura été bien plus favorable qu\'à lui.';
            }
            const _0x2f1551 = _0x5438e9(_0x14f88a) - _0x5438e9(_0x10e0a9);
            return _0x2f1551 > 50 ? 'Vous surpassez très largement ' + _0x10e0a9[_0x59fb08(274)] + _0x59fb08(549) : _0x2f1551 > 18 ? _0x59fb08(302) + _0x10e0a9.name + _0x59fb08(263) : _0x2f1551 > -18 ? _0x59fb08(233) + _0x10e0a9.name + _0x59fb08(416) : _0x2f1551 > -50 ? _0x10e0a9.name + _0x59fb08(162) : _0x10e0a9[_0x59fb08(274)] + ' aura eu la carrière que vous auriez rêvé d\'avoir.';
        },
        'BALANCE_REF': BALANCE
    };
    'undefined' != typeof module && module[_0x2ae430(166)] ? module.exports = _0x2c8da9 : window[_0x2ae430(459)] = _0x2c8da9;
}());
;
function _0x51a1(_0x1c1211, _0x161ac2) {
    _0x1c1211 = _0x1c1211 - 130;
    const _0x314b41 = _0x314b();
    let _0x51a1d1 = _0x314b41[_0x1c1211];
    if (_0x51a1.xRXmKF === undefined) {
        var _0x3d7f24 = function (_0xe9b143) {
            const _0x3dd19d = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let _0x41f421 = '', _0x5309e8 = '';
            for (let _0xe3d09d = 0, _0x4faedf, _0x704bac, _0x3bcbbb = 0; _0x704bac = _0xe9b143.charAt(_0x3bcbbb++); ~_0x704bac && (_0x4faedf = _0xe3d09d % 4 ? _0x4faedf * 64 + _0x704bac : _0x704bac, _0xe3d09d++ % 4) ? _0x41f421 += String.fromCharCode(255 & _0x4faedf >> (-2 * _0xe3d09d & 6)) : 0) {
                _0x704bac = _0x3dd19d.indexOf(_0x704bac);
            }
            for (let _0x39f973 = 0, _0x150a36 = _0x41f421.length; _0x39f973 < _0x150a36; _0x39f973++) {
                _0x5309e8 += '%' + ('00' + _0x41f421.charCodeAt(_0x39f973).toString(16)).slice(-2);
            }
            return decodeURIComponent(_0x5309e8);
        };
        _0x51a1.Bmukws = _0x3d7f24;
        _0x51a1.JMucNB = {};
        _0x51a1.xRXmKF = true;
        ;
    }
    const _0x320d8b = _0x314b41[0], _0xbab169 = _0x1c1211 + _0x320d8b, _0x34f9ec = _0x51a1.JMucNB[_0xbab169];
    return !_0x34f9ec ? (_0x51a1d1 = _0x51a1.Bmukws(_0x51a1d1), _0x51a1.JMucNB[_0xbab169] = _0x51a1d1) : _0x51a1d1 = _0x34f9ec, _0x51a1d1;
}
;