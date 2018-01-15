/********************************************************************************
** Form generated from reading UI file 'image_view.ui'
**
** Created by: Qt User Interface Compiler version 5.5.1
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_IMAGE_VIEW_H
#define UI_IMAGE_VIEW_H

#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QCheckBox>
#include <QtWidgets/QComboBox>
#include <QtWidgets/QDoubleSpinBox>
#include <QtWidgets/QHBoxLayout>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QLineEdit>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QSpacerItem>
#include <QtWidgets/QVBoxLayout>
#include <QtWidgets/QWidget>
#include "rqt_image_view/ratio_layouted_frame.h"

QT_BEGIN_NAMESPACE

class Ui_ImageViewWidget
{
public:
    QVBoxLayout *verticalLayout;
    QHBoxLayout *horizontalLayout;
    QComboBox *topics_combo_box;
    QPushButton *refresh_topics_push_button;
    QPushButton *zoom_1_push_button;
    QCheckBox *dynamic_range_check_box;
    QDoubleSpinBox *max_range_double_spin_box;
    QPushButton *save_as_image_push_button;
    QSpacerItem *horizontalSpacer;
    QHBoxLayout *horizontalLayout_3;
    QCheckBox *publish_click_location_check_box;
    QLineEdit *publish_click_location_topic_line_edit;
    QSpacerItem *horizontalSpacer_3;
    QHBoxLayout *horizontalLayout_2;
    rqt_image_view::RatioLayoutedFrame *image_frame;
    QSpacerItem *horizontalSpacer_2;
    QSpacerItem *verticalSpacer;

    void setupUi(QWidget *ImageViewWidget)
    {
        if (ImageViewWidget->objectName().isEmpty())
            ImageViewWidget->setObjectName(QStringLiteral("ImageViewWidget"));
        ImageViewWidget->setEnabled(true);
        ImageViewWidget->resize(400, 300);
        verticalLayout = new QVBoxLayout(ImageViewWidget);
        verticalLayout->setObjectName(QStringLiteral("verticalLayout"));
        horizontalLayout = new QHBoxLayout();
        horizontalLayout->setObjectName(QStringLiteral("horizontalLayout"));
        topics_combo_box = new QComboBox(ImageViewWidget);
        topics_combo_box->setObjectName(QStringLiteral("topics_combo_box"));
        topics_combo_box->setSizeAdjustPolicy(QComboBox::AdjustToContents);

        horizontalLayout->addWidget(topics_combo_box);

        refresh_topics_push_button = new QPushButton(ImageViewWidget);
        refresh_topics_push_button->setObjectName(QStringLiteral("refresh_topics_push_button"));

        horizontalLayout->addWidget(refresh_topics_push_button);

        zoom_1_push_button = new QPushButton(ImageViewWidget);
        zoom_1_push_button->setObjectName(QStringLiteral("zoom_1_push_button"));
        zoom_1_push_button->setEnabled(false);
        zoom_1_push_button->setCheckable(true);

        horizontalLayout->addWidget(zoom_1_push_button);

        dynamic_range_check_box = new QCheckBox(ImageViewWidget);
        dynamic_range_check_box->setObjectName(QStringLiteral("dynamic_range_check_box"));

        horizontalLayout->addWidget(dynamic_range_check_box);

        max_range_double_spin_box = new QDoubleSpinBox(ImageViewWidget);
        max_range_double_spin_box->setObjectName(QStringLiteral("max_range_double_spin_box"));
        max_range_double_spin_box->setMinimum(0.01);
        max_range_double_spin_box->setMaximum(100);
        max_range_double_spin_box->setValue(10);

        horizontalLayout->addWidget(max_range_double_spin_box);

        save_as_image_push_button = new QPushButton(ImageViewWidget);
        save_as_image_push_button->setObjectName(QStringLiteral("save_as_image_push_button"));
        save_as_image_push_button->setIconSize(QSize(16, 16));

        horizontalLayout->addWidget(save_as_image_push_button);

        horizontalSpacer = new QSpacerItem(40, 20, QSizePolicy::Expanding, QSizePolicy::Minimum);

        horizontalLayout->addItem(horizontalSpacer);

        horizontalLayout->setStretch(6, 1);

        verticalLayout->addLayout(horizontalLayout);

        horizontalLayout_3 = new QHBoxLayout();
        horizontalLayout_3->setObjectName(QStringLiteral("horizontalLayout_3"));
        publish_click_location_check_box = new QCheckBox(ImageViewWidget);
        publish_click_location_check_box->setObjectName(QStringLiteral("publish_click_location_check_box"));

        horizontalLayout_3->addWidget(publish_click_location_check_box);

        publish_click_location_topic_line_edit = new QLineEdit(ImageViewWidget);
        publish_click_location_topic_line_edit->setObjectName(QStringLiteral("publish_click_location_topic_line_edit"));
        publish_click_location_topic_line_edit->setEnabled(true);
        publish_click_location_topic_line_edit->setAutoFillBackground(false);

        horizontalLayout_3->addWidget(publish_click_location_topic_line_edit);

        horizontalSpacer_3 = new QSpacerItem(40, 20, QSizePolicy::Expanding, QSizePolicy::Minimum);

        horizontalLayout_3->addItem(horizontalSpacer_3);


        verticalLayout->addLayout(horizontalLayout_3);

        horizontalLayout_2 = new QHBoxLayout();
        horizontalLayout_2->setSpacing(0);
        horizontalLayout_2->setObjectName(QStringLiteral("horizontalLayout_2"));
        image_frame = new rqt_image_view::RatioLayoutedFrame(ImageViewWidget);
        image_frame->setObjectName(QStringLiteral("image_frame"));
        QSizePolicy sizePolicy(QSizePolicy::Expanding, QSizePolicy::Expanding);
        sizePolicy.setHorizontalStretch(0);
        sizePolicy.setVerticalStretch(0);
        sizePolicy.setHeightForWidth(image_frame->sizePolicy().hasHeightForWidth());
        image_frame->setSizePolicy(sizePolicy);
        image_frame->setMinimumSize(QSize(80, 60));
        image_frame->setFrameShape(QFrame::Box);
        image_frame->setLineWidth(1);

        horizontalLayout_2->addWidget(image_frame);

        horizontalSpacer_2 = new QSpacerItem(0, 20, QSizePolicy::Expanding, QSizePolicy::Minimum);

        horizontalLayout_2->addItem(horizontalSpacer_2);

        horizontalLayout_2->setStretch(0, 1);

        verticalLayout->addLayout(horizontalLayout_2);

        verticalSpacer = new QSpacerItem(20, 0, QSizePolicy::Minimum, QSizePolicy::Expanding);

        verticalLayout->addItem(verticalSpacer);

        verticalLayout->setStretch(2, 1);

        retranslateUi(ImageViewWidget);

        QMetaObject::connectSlotsByName(ImageViewWidget);
    } // setupUi

    void retranslateUi(QWidget *ImageViewWidget)
    {
        ImageViewWidget->setWindowTitle(QApplication::translate("ImageViewWidget", "Image View", 0));
#ifndef QT_NO_TOOLTIP
        dynamic_range_check_box->setToolTip(QApplication::translate("ImageViewWidget", "Dynamic depth range", 0));
#endif // QT_NO_TOOLTIP
        dynamic_range_check_box->setText(QString());
#ifndef QT_NO_TOOLTIP
        max_range_double_spin_box->setToolTip(QApplication::translate("ImageViewWidget", "Max depth", 0));
#endif // QT_NO_TOOLTIP
        max_range_double_spin_box->setSuffix(QApplication::translate("ImageViewWidget", "m", 0));
#ifndef QT_NO_TOOLTIP
        save_as_image_push_button->setToolTip(QApplication::translate("ImageViewWidget", "Save as image", 0));
#endif // QT_NO_TOOLTIP
#ifndef QT_NO_TOOLTIP
        publish_click_location_check_box->setToolTip(QApplication::translate("ImageViewWidget", "Publish click location", 0));
#endif // QT_NO_TOOLTIP
        publish_click_location_check_box->setText(QString());
#ifndef QT_NO_TOOLTIP
        publish_click_location_topic_line_edit->setToolTip(QApplication::translate("ImageViewWidget", "Click location topic (leave empty for auto-naming)", 0));
#endif // QT_NO_TOOLTIP
    } // retranslateUi

};

namespace Ui {
    class ImageViewWidget: public Ui_ImageViewWidget {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_IMAGE_VIEW_H
