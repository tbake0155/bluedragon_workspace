/****************************************************************************
** Meta object code from reading C++ file 'ratio_layouted_frame.h'
**
** Created by: The Qt Meta Object Compiler version 67 (Qt 5.5.1)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "../../../../../src/rqt_common_plugins/rqt_image_view/include/rqt_image_view/ratio_layouted_frame.h"
#include <QtCore/qbytearray.h>
#include <QtCore/qmetatype.h>
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'ratio_layouted_frame.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 67
#error "This file was generated using the moc from 5.5.1. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
struct qt_meta_stringdata_rqt_image_view__RatioLayoutedFrame_t {
    QByteArrayData data[6];
    char stringdata0[65];
};
#define QT_MOC_LITERAL(idx, ofs, len) \
    Q_STATIC_BYTE_ARRAY_DATA_HEADER_INITIALIZER_WITH_OFFSET(len, \
    qptrdiff(offsetof(qt_meta_stringdata_rqt_image_view__RatioLayoutedFrame_t, stringdata0) + ofs \
        - idx * sizeof(QByteArrayData)) \
    )
static const qt_meta_stringdata_rqt_image_view__RatioLayoutedFrame_t qt_meta_stringdata_rqt_image_view__RatioLayoutedFrame = {
    {
QT_MOC_LITERAL(0, 0, 34), // "rqt_image_view::RatioLayouted..."
QT_MOC_LITERAL(1, 35, 14), // "delayed_update"
QT_MOC_LITERAL(2, 50, 0), // ""
QT_MOC_LITERAL(3, 51, 9), // "mouseLeft"
QT_MOC_LITERAL(4, 61, 1), // "x"
QT_MOC_LITERAL(5, 63, 1) // "y"

    },
    "rqt_image_view::RatioLayoutedFrame\0"
    "delayed_update\0\0mouseLeft\0x\0y"
};
#undef QT_MOC_LITERAL

static const uint qt_meta_data_rqt_image_view__RatioLayoutedFrame[] = {

 // content:
       7,       // revision
       0,       // classname
       0,    0, // classinfo
       2,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       2,       // signalCount

 // signals: name, argc, parameters, tag, flags
       1,    0,   24,    2, 0x06 /* Public */,
       3,    2,   25,    2, 0x06 /* Public */,

 // signals: parameters
    QMetaType::Void,
    QMetaType::Void, QMetaType::Int, QMetaType::Int,    4,    5,

       0        // eod
};

void rqt_image_view::RatioLayoutedFrame::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::InvokeMetaMethod) {
        RatioLayoutedFrame *_t = static_cast<RatioLayoutedFrame *>(_o);
        Q_UNUSED(_t)
        switch (_id) {
        case 0: _t->delayed_update(); break;
        case 1: _t->mouseLeft((*reinterpret_cast< int(*)>(_a[1])),(*reinterpret_cast< int(*)>(_a[2]))); break;
        default: ;
        }
    } else if (_c == QMetaObject::IndexOfMethod) {
        int *result = reinterpret_cast<int *>(_a[0]);
        void **func = reinterpret_cast<void **>(_a[1]);
        {
            typedef void (RatioLayoutedFrame::*_t)();
            if (*reinterpret_cast<_t *>(func) == static_cast<_t>(&RatioLayoutedFrame::delayed_update)) {
                *result = 0;
            }
        }
        {
            typedef void (RatioLayoutedFrame::*_t)(int , int );
            if (*reinterpret_cast<_t *>(func) == static_cast<_t>(&RatioLayoutedFrame::mouseLeft)) {
                *result = 1;
            }
        }
    }
}

const QMetaObject rqt_image_view::RatioLayoutedFrame::staticMetaObject = {
    { &QFrame::staticMetaObject, qt_meta_stringdata_rqt_image_view__RatioLayoutedFrame.data,
      qt_meta_data_rqt_image_view__RatioLayoutedFrame,  qt_static_metacall, Q_NULLPTR, Q_NULLPTR}
};


const QMetaObject *rqt_image_view::RatioLayoutedFrame::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->dynamicMetaObject() : &staticMetaObject;
}

void *rqt_image_view::RatioLayoutedFrame::qt_metacast(const char *_clname)
{
    if (!_clname) return Q_NULLPTR;
    if (!strcmp(_clname, qt_meta_stringdata_rqt_image_view__RatioLayoutedFrame.stringdata0))
        return static_cast<void*>(const_cast< RatioLayoutedFrame*>(this));
    return QFrame::qt_metacast(_clname);
}

int rqt_image_view::RatioLayoutedFrame::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QFrame::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 2)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 2;
    } else if (_c == QMetaObject::RegisterMethodArgumentMetaType) {
        if (_id < 2)
            *reinterpret_cast<int*>(_a[0]) = -1;
        _id -= 2;
    }
    return _id;
}

// SIGNAL 0
void rqt_image_view::RatioLayoutedFrame::delayed_update()
{
    QMetaObject::activate(this, &staticMetaObject, 0, Q_NULLPTR);
}

// SIGNAL 1
void rqt_image_view::RatioLayoutedFrame::mouseLeft(int _t1, int _t2)
{
    void *_a[] = { Q_NULLPTR, const_cast<void*>(reinterpret_cast<const void*>(&_t1)), const_cast<void*>(reinterpret_cast<const void*>(&_t2)) };
    QMetaObject::activate(this, &staticMetaObject, 1, _a);
}
QT_END_MOC_NAMESPACE
